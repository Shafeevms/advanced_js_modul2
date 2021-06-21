import { store } from "./store.js";

console.log('Локальное хранилище');


export const getData = () => {
  const page = window.location.hash || '#me';
  store.data = JSON.parse(localStorage.getItem(page)) ?? [];
  console.log(store.data);
};

export const setData = () => {
  const page = window.location.hash || '#me';
  localStorage.setItem(page, JSON.stringify(store.data))
};
