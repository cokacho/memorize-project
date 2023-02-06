// Could we use LocalStore or IndexDB
export const saveLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
}

export const removeLocal = (key: string) => {
  localStorage.removeItem(key);
}

export const getLocal = (key: string, json = false) => {
  const item = localStorage.getItem(key);
  if (item && typeof(item) != 'undefined' && json) {
    return JSON.parse(item);
  }
  return  item;
}

export const resetLocal = () => {
  localStorage.clear();
}