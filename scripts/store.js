export const store = {
  data: [],
  page: '/',
  currentTodo: {},
};


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
