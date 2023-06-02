/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useLayoutEffect, useState } from 'react';
import { usePrevious } from './usePrevious';
import useRequest from './useRequest';
import {
  arrayFilterToObject,
  splitToChunks,
  urlToParams,
} from '../helper/utils';
import type { FlashList } from '@shopify/flash-list';
export function useVirtualList({
  items = [],
  serviceFn,
  cursorItems = { total: 0, nextPage: null },
  initialRequest = false,
  delay,
  search,
  split = 0,
  defaultParams = [],
}: {
  items?: any[] | [] | null;
  serviceFn?: Awaited<
    Promise<(cursor?: { [key: string]: any } | null) => any>
  > | null;
  cursorItems?: null | {
    total: number;
    nextPage: string | null;
  };

  initialRequest?: boolean;
  delay?: number;
  search?: [string, string | null] | string | null;
  defaultParams?: [string, string | null][];
  uuid?: string | null;
  split?: number;
}): {
  isFetched: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  rowVirtualizer: FlashList<any>;
  itemsInner: any[];
  cursor?: null | {
    total: number;
    nextPage: string | null;
  };
  loadMore: () => void;
  reload: () => void;
  restart: () => void;
  setItemsInner: React.Dispatch<React.SetStateAction<any[]>>;
  setCursor: (data: any) => void;
  setParams: (data: any) => void;
} {
  const [cursor, setCursorInner] = useState<any | null>(cursorItems);
  const [defaultParamsInner, setParamsInner] = useState(defaultParams);
  const [itemsInner, setItemsInner] = useState(items || []);
  const searchPrevious = usePrevious(search);
  const splitPrevious = usePrevious(split);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { isLoading, isFetched, request } = useRequest({
    initial: initialRequest ? false : true,
    error: true,
    errorMessage: '',
    success: false,
    successMessage: '',
  });
  const restart = () => {
    requestService(null, true);
  };
  const reload = () => {
    if (isLoading === false) {
      setIsRefreshing(true);
      requestService(null, true);
    }
  };
  const loadMore = () => {
    if (!!cursor?.nextPage && isLoading === false) {
      requestService(cursor);
    }
  };

  const setCursor = (data: any) => {
    setCursorInner(data);
  };
  const setParams = (data: any) => {
    setParamsInner(data);
  };

  const requestService = async (cursorParams?: any | null, initial = false) => {
    if (serviceFn) {
      let params = urlToParams(cursorParams?.nextPage);
      let {
        result: { data, cursor },
        error,
      } = await request(
        serviceFn.bind(null, {
          ...(!initial
            ? //@ts-ignore
              arrayFilterToObject(...defaultParamsInner, search)
            : arrayFilterToObject(...defaultParamsInner)),
          ...params,
        })
      );

      if (data) {
        setItemsInner(
          split
            ? splitToChunks(
                [...(cursorParams ? itemsInner : []), ...data],
                split,
                true
              )
            : [...(cursorParams ? itemsInner : []), ...data]
        );
        setCursorInner(cursor);
      }
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (splitPrevious != split) {
      let tmp = [...itemsInner];
      setItemsInner(splitToChunks(tmp, split, true));
      requestService(null);
    }
  }, [split]);
  useEffect(() => {
    if (searchPrevious?.[1] != search?.[1]) {
      setCursorInner(null);
      requestService(null);
    }
  }, [search]);

  useLayoutEffect(() => {
    if (initialRequest) {
      if (delay) {
        setTimeout(() => {
          requestService(null, true);
        }, delay);
      }
    }
  }, []);

  //@ts-ignore
  return {
    isLoading,
    isFetched,
    isRefreshing,
    itemsInner,
    cursor,
    setItemsInner,
    loadMore,
    reload,
    setCursor,
    setParams,
    restart,
  };
}
