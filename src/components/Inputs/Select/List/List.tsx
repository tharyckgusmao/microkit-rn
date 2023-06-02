import { FlashList } from '@shopify/flash-list';
import React, { FC, ReactElement, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Box from '../../../BaseKit/Box/Box';
import Divider from '../../../BaseKit/Divider/Divider';
import Icon from '../../../BaseKit/Icon/Icon';
import Button from '../../../Buttons/Button/Button';
import Dots from '../../../Loaders/Dots/Dots';
import { useDebounceEffect } from '../../../../hooks/useDebounced';
import Input from '../../Input/Input';

import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import NotFound from '../../../DataDisplay/NotFound/NotFound';
import { useVirtualList } from '../../../../hooks/useVirtualList';

type IList = {
  element?: ReactElement<any>;
  items?: any[];
  height?: number;
  factorSearch?: string;
  colorIndicator?: string;
  colorDivider?: string;
  size?: number;
  sizeSeparator?: number;
  paddingStart?: number;
  search?: boolean;
  activeValue?: any | string | number | null;
  multiple?: boolean;
  footerTitle?: string;
  titleNotFound?: string;
  defaultParams?: [string, string | null][];
  handleChangeActive?: (item: { value: string; label: string }) => void;
  onConfirm?: () => void;
  serviceFn?: Awaited<Promise<() => void>>;
};
import type { TThemeBase } from '../../../../helper/theme';
import { makeStyle } from '../../../../hooks/makeStyle';

export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.select?.list;
});

export const List: FC<IList> = ({
  element,
  items,
  size = 40,
  paddingStart = 0,

  activeValue = null,
  search = false,
  factorSearch = '',
  multiple,
  colorIndicator = '#000',
  colorDivider = '#f9f9f9',
  footerTitle = 'Save!',
  titleNotFound = 'Not Found Items!',
  sizeSeparator = 10,
  defaultParams = null,
  serviceFn = null,
  handleChangeActive,
  onConfirm,
}) => {
  const styles = useStyle();

  const [searchInner, setSearch] = useState<string | null>('');
  const [searchParams, setSearchParams] = useState<
    [string, string | null] | string | null | undefined
  >(null);
  const panRef = useRef();
  const list = useRef<FlashList<any> | null>(null); //@ts-ignore

  const { isLoading, itemsInner, cursor, loadMore } = useVirtualList({
    items: items,
    cursorItems: null,
    initialRequest: true,
    serviceFn: serviceFn,
    delay: 600,
    search: searchParams,
    defaultParams: defaultParams,
  });

  const handleClickItem = (item: { value: string; label: string }) => {
    if (handleChangeActive) {
      handleChangeActive(item);
    }
  };

  const handleChangeSearch = () => {
    setSearchParams([factorSearch, searchInner ?? null]);
  };
  useDebounceEffect(
    () => {
      handleChangeSearch();
    },
    300,
    [searchInner]
  );
  const renderFooter = () => {
    if (!isLoading || !cursor) {
      return null;
    }
    return (
      <Box style={styles.loading}>
        <ActivityIndicator size={'small'} color={colorIndicator} />
      </Box>
    );
  };

  const renderItem = ({ item }) => {
    const activeItem = multiple
      ? activeValue?.findIndex((e) => e.data.id === item.id) > -1
      : activeValue?.data?.id == item?.id;
    return item !== null ? (
      <Box row aCenter jCenter flex={1}>
        {React.cloneElement(element as React.ReactElement<any>, {
          label: item?.label,
          onClick: handleClickItem,
          activeValue: activeItem,
          item,
        })}
      </Box>
    ) : null;
  };

  const loadingDots = useMemo(
    () =>
      isLoading && !cursor ? (
        <Box
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 4,
            backgroundColor: '#ffffff22',
          }}
          aCenter
          jCenter
          flex={1}
          position="absolute"
          pointerEvents="none"
        >
          <Dots show={true} />
        </Box>
      ) : null,
    [isLoading, cursor]
  );
  const header = useMemo(
    () =>
      search && (
        <Box
          column
          style={{
            width: '100%',
            zIndex: 3,
            paddingTop: 20,
          }}
        >
          <>
            <Box
              column
              style={{
                paddingHorizontal: 20,
              }}
            >
              <Input
                placeholder={'Pesquise aqui...'}
                name={'search'}
                preffix={<Icon name="icon_searchlinear" />}
                autoComplete={'off'}
                pressEnterBlur={true}
                value={factorSearch[1]}
                onChange={(e) => {
                  setSearch(e);
                }}
                handlePressEnter={(e) => {
                  setSearchParams([factorSearch, e ?? null]);
                }}
              />
            </Box>
            <Divider
              type="h"
              spaccingBottom={0}
              spaccingTop={20}
              color={colorDivider}
            />
          </>
        </Box>
      ),
    [searchInner]
  );
  const footer = useMemo(
    () => (
      <>
        <Divider type="h" spaccingTop={20} spaccingBottom={20} />
        <Box style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          <Button
            disabled={!activeValue}
            onPress={onConfirm}
            title={footerTitle}
            suffix={<Icon name={'icon_arrowrightbold'} />}
          />
        </Box>
      </>
    ),
    [activeValue]
  );
  return (
    <Box style={styles?.ctn}>
      {header}
      <Box style={styles?.list}>
        <PanGestureHandler ref={panRef}>
          <FlashList
            overrideProps={{
              simultaneousHandlers: panRef,
            }}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingTop: paddingStart,
            }}
            data={itemsInner}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMore}
            keyExtractor={(item) => item.id}
            ListFooterComponent={renderFooter}
            estimatedItemSize={size}
            renderScrollComponent={ScrollView}
            ref={list}
            ItemSeparatorComponent={() => (
              <View style={{ height: sizeSeparator }} />
            )}
            ListEmptyComponent={
              cursor ? (
                <NotFound
                  style={{
                    position: 'relative',
                  }}
                  title={titleNotFound}
                />
              ) : null
            }
            extraData={activeValue}
          />
        </PanGestureHandler>
        {loadingDots}
      </Box>

      {footer}
    </Box>
  );
};

export default List;
