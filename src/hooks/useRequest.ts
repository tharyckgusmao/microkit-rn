import { useCallback, useRef, useState } from 'react';

export const useRequest = (
  config = {
    error: true,
    errorMessage: '',
    success: false,
    successMessage: '',
    initial: false,
    initialLoading: false,
  }
) => {
  const data = useRef(null);
  const [isLoading, setIsLoading] = useState(config.initialLoading);
  const [isFetched, setIsFetched] = useState(config.initial);
  const [isError, setIsError] = useState(false);

  const fetchDataService = async (
    r: Awaited<Promise<() => any>>,
    options: null | {
      error?: boolean;
      errorMessage?: string;
      success?: boolean;
      successMessage?: string;
    }
  ) => {
    setIsError(false);
    setIsFetched(false);
    setIsLoading(true);
    try {
      let result = await r();
      data.current = result?.data || result?.result || null;

      // Add suport callback
      // if ((options && options.success) || config.success) {
      //   //Success
      // }
      return result;
    } catch (error) {
      // Add suport callback
      // if ((options && options.success) || config.success) {
      //   //Success
      // }
      // if (config.error) {
      //   //Error
      // }
    } finally {
      setIsLoading(false);
      setIsFetched(true);
    }
  };

  const fetchData = useCallback(fetchDataService, [config]);

  const request = (r: Awaited<Promise<() => any>>, options = null) => {
    return fetchData(r, options);
  };

  return { data: data.current, isLoading, isFetched, isError, request };
};

export default useRequest;
