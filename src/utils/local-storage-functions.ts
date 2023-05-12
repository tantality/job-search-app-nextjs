export const setItemToLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string): any => {
  const value = localStorage.getItem(key);
  return value;
};
