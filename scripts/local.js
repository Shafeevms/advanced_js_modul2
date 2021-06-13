import { store } from "./store.js";

console.log('Локальное хранилище');
const page = new URLSearchParams(window.location.search).get('page');

export const getData = (page = 'me') => {
  console.log('local');
  store.data = localStorage.getItem(page);
};

// export const setData = (page, data) => {
//   return
// }
