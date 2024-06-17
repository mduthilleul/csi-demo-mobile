export const increment = (num: number | null) => (num ?? 0) + 1;

export const decrement = (num: number) => num - 1;

export const applyOnEachNumber = (numbers: number[], fn: (num: number) => number) => numbers.map(fn);
