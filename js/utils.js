export const shuffle = (arr) => {
  return arr.sort((a, b) => Math.random() - 0.5);
};
export const cut = (arr, number) => {
  return arr.slice(0, number);
};
