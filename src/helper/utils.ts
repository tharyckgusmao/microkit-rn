import queryString from 'query-string';

export const range = (start: number, end: number, step = 1) => {
  'worklet';
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill(0)
    .map((_, idx) => start + idx * step);
};
export const parserParamsCursor = (params: any | null) => {
  let paramsTmp = params as any;
  for (const key in paramsTmp) {
    if (paramsTmp[key] === null || paramsTmp[key] === undefined) {
      delete paramsTmp[key];
    }
  }
  let paramsStringfy = paramsTmp ? queryString.stringify(paramsTmp) : null;

  return paramsStringfy ? `?${paramsStringfy}` : '';
};

export const urlToParams = (url?: string | null) => {
  return url && url?.indexOf('/?') > -1
    ? queryString.parse(`?${url.split('/?')[1]}`)
    : {};
};
export const splitToChunks = (
  array: any[],
  n: number,
  flat: boolean = false
) => {
  const [...arr] = flat ? array.flat() : array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
};

export const arrayFilterToObject = (...args: any[]) => {
  let filter: any = {};
  args.forEach((e) => {
    if (Array.isArray(e)) {
      if (e?.[1] && e?.[0]) {
        filter[e[0]] = e[1];
      }
    } else {
      filter = { ...filter, ...(e as any) };
    }
  });

  return filter;
};
