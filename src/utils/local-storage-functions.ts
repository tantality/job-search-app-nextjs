export const setItemToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  return value;
};

export const removeItemFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
