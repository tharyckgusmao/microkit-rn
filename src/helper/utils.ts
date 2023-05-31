export const range = (start: number, end: number, step = 1) => {
  'worklet';
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill(0)
    .map((_, idx) => start + idx * step);
};
