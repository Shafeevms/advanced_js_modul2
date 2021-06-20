import { store } from "./store.js";

console.log('Локальное хранилище');
// const page = new URLSearchParams(window.location.search).get('page');

export const getData = (page = '/') => {
  store.data = JSON.parse(localStorage.getItem(store.page)) ?? [];
};

export const setData = () => localStorage.setItem(store.page, JSON.stringify(store.data));
