import { store } from "./store.js";
import { showItems } from './render.js';

console.log('Серверное хранилище');

const URL = 'http://localhost:3000/api/todos';

export const getData = async() => {
  const res = await fetch(URL);
  const json = await res.json();
  store.data = json;
};


export const setData = (name) => {
  const body = {
    owner: window.location.hash || '#me',
    name,
  }
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body)
  })
};

// ?
export const done = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  const body = {
    done: false,
    name,
    owner: window.location.hash || '#me',
  }
  fetch(`${URL}/${currentId}`, {
    method: 'PATCH',
    body: JSON.stringify(body)
  });
  setData();
  showItems();
};
