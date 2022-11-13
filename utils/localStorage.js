export const getLocalStorageItem = (key) => {
  if (typeof window !== undefined) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const setLocalStorageItem = (key, data) => {
  if (typeof window !== undefined) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const removeLocalStorageItem = (key) => {
  if (typeof window !== undefined) {
    return localStorage.removeItem(key);
  }
};

export const clearLocalStorage = () => {
  if (typeof window !== undefined) {
    return localStorage.clear();
  }
};
