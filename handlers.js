const initializeList = () => {
  window.list = [
      { value: 'Bananas', id: '1' },
      { value: 'Orange Juice', id: '2' },
      { value: 'Apples', id: '3' },
  ];
  window.rerenderLists();
}

const generateId = () => Math.random().toString(36).substr(2, 9);

const addItem = value => {
  window.list.push({ value, id: generateId() });
  rerenderLists();
}

const removeItem = id => {
  window.list = window.list.filter(item => item.id !== id);
  rerenderLists();
};

const toggleStar = id => {
  window.list
      .filter(item => item.id === id)
      .forEach(item => item.favourite = !item.favourite);
  rerenderLists();
};

const displayDialog = (id) => {
  const item = window.list.filter(item => item.id === id)[0];
  item && renderDialog(item);
};

const hideDialog = () => {
  killDialog();
};
