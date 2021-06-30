import { store } from './store.js';
import { showItems, markItem } from './render.js';

console.log('Локальное хранилище');

export const getData = () => {
  const page = window.location.hash || '#me';
  store.data = JSON.parse(localStorage.getItem(page)) ?? [];
};

export const setData = (value) => {
  if (value) {
    const newtodo = {
      id: generatorID(),
      name: value,
      done: false,
    };
    store.data.push(newtodo);
    store.currentTodo = newtodo;
  }
  const page = window.location.hash || '#me';
  localStorage.setItem(page, JSON.stringify(store.data))
};

export const done = (e) => {
  const target = e.target.closest('li');
  const currentId = +e.target.closest('li').dataset.id;
  store.data.forEach(el => {
    if (el.id === currentId) {
      el.done = !el.done;
    }
  });
  setData();
  markItem(target);
};

export const del = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  store.data = store.data.filter(el => el.id !== currentId);
  setData();
  showItems();
};

const generatorID = () => +Date.now().toString().slice(0,10);
