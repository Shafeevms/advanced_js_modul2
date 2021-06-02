export const store = {
  listners: [],
  data: []
};

export const getItems = () => {
  const storage = document.querySelector('#server').checked
  ? await import ('./server')
  : await import ('./local');
  storage.getData();
};
