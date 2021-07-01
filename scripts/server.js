import { store } from "./store.js";
import { showItems } from './render.js';

console.log('Серверное хранилище');

const URL = 'http://localhost:3000/api/todos';

window.location.hash || '#me'

export const getData = async() => {
  const res = await fetch(URL);
  const json = await res.json();
  store.data = filteredData(json, location.hash);
};

export const setData = async(string) => {
  const body = {
    owner: window.location.hash || '#me',
    name: string,
  }
  const res = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body)
  });
  const json = await res.json();
  store.currentTodo = json;
  console.log(store.currentTodo);
};

export const done = async(e) => {
  const target = e.target.closest('li').dataset;
  const currentId = +target.id;
  const done = target.done === 'true' ? true : false
  const body = {
    done: !done
  }
  await fetch(`${URL}/${currentId}`, {
    method: 'PATCH',
    body: JSON.stringify(body)
  });
  showItems();
};

export const del = async(e) => {
  const currentId = +e.target.closest('li').dataset.id;
  await fetch(`${URL}/${currentId}`, {
    method: 'DELETE'
  });
  showItems();
};

const filteredData = (arr, hash = '#me') => arr.filter(el => el.owner === hash);
