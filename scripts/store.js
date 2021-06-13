export const store = {
  listners: [],
  data: []
};

// ? является ли это динамическим импортом?
// ? если выношу из функции const storage = document.querySelector('#server') - ошибка:
// ? Uncaught (in promise) TypeError: storage.getData is not a function at getItems (store.js:13)

export const getItems = async () => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  storage.getData();
};

export const setItems = async () => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  storage.setData();
};
