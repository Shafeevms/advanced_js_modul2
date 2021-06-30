export const store = {
  data: [],
  page: '/',
  store: null,
};

const server = document.querySelector('#server');

export const getItems = async () => {
  const storage = await import (server.checked ?'./server.js' : './local.js');
  await storage.getData();
};

export const setItems = async (name) => {
  const storage = await import (server.checked ?'./server.js' : './local.js');
  storage.setData(name);
};

export const onDone = async (e) => {
  const storage = await import (server.checked ?'./server.js' : './local.js');
  storage.done(e);
};

export const onDelete = async (e) => {
  const storage = await import (server.checked ?'./server.js' : './local.js');
  storage.del(e);
};
