import { rerenderLists, killDialog } from './renderer';

export const initializeList = () => {
  window.list = [
      { value: 'Bananas', id: '1' },
      { value: 'Orange Juice', id: '2' },
      { value: 'Apples', id: '3' },
  ];
  rerenderLists();
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const addItem = value => {
  window.list.push({ value, id: generateId() });
  rerenderLists();
}

export const removeItem = id => {
  window.list = window.list.filter(item => item.id !== id);
  rerenderLists();
};

export const toggleStar = id => {
  window.list
      .filter(item => item.id === id)
      .forEach(item => item.favourite = !item.favourite);
  rerenderLists();
};

export const displayDialog = (id) => {
  const item = window.list.filter(item => item.id === id)[0];
  item && renderDialog(item);
};

export const hideDialog = () => {
  killDialog();
};
