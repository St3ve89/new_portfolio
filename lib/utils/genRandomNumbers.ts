export const genRandomNumbers = (
  min: number,
  max: number,
  count: number
): number[] => {
  const set = new Set<number>();
  while (set.size < count) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(r);
  }
  return Array.from(set);
};
