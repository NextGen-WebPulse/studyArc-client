export const setLocalStorage = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("local storage set error: ", error);
  }
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log("get local storage error: ", error);
    return null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log("local storage set error: ", error);
  }
};
