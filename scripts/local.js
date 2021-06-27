import { store } from './store.js';
import { showItems } from './render.js';


console.log('Локальное хранилище');

export const getData = () => {
  const page = window.location.hash || '#me';
  store.data = JSON.parse(localStorage.getItem(page)) ?? [];
};

export const setData = (value) => {
  if (value) {
    store.data.push({
      id: store.data.length + 1,
      name: value,
      done: false,
    });
  }
  const page = window.location.hash || '#me';
  localStorage.setItem(page, JSON.stringify(store.data))
};

export const done = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  store.data.map(el => {
    if (el.id === currentId) {
      el.done = !el.done;
    }
  });
  setData();
  showItems();
};
