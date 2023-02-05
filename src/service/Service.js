export const getItemsFromLS = key => {
  const storageValue = localStorage.getItem(key);

  let todoItems = null;
  try {
    const storageValueJSON = JSON.parse(storageValue);
    if(Array.isArray(storageValueJSON)) {
      todoItems = storageValueJSON;
    }
  } catch(e) {
    todoItems = [];
  }
  return todoItems;
}

export const saveItemsToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}