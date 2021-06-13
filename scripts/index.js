import { showItems } from './render.js';
import { store } from './store.js';

const input = document.querySelector('.js-input');
const addBtn = document.querySelector('.js-add-btn');

const setListeners = () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    store.data.push({
      act: input.value,
      checked: false
    });
  })
}

export const init = () => {
  showItems();
  setListeners();
}


