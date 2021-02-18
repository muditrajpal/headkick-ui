
export const getLocalStorage = key => {
  return window.localStorage.getItem(key);
};

export const setLocalStorage = (key, data) => {
  return window.localStorage.setItem(key, data);
};

export const deleteLocalStorage = key => {
  return window.localStorage.removeItem(key);
};

export const clearLocalStorage = key => {
  return window.localStorage.clear();
};