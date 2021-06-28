export const store = {
  data: [],
  page: '/',
  store: null,
};

export const getItems = async () => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  await storage.getData();
};

export const setItems = async (name) => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  storage.setData(name);
};

export const onDone = async (e) => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  storage.done(e);
};

export const onDelete = async (e) => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server.js')
  : await import ('./local.js');
  storage.del(e);
};
