import { showItems } from './render.js';
import { setItems, store } from './store.js';

const input = document.querySelector('.js-input');
const addBtn = document.querySelector('.js-add-btn');
const ul = document.querySelector('.todo__list');
const header = document.querySelector('.header');

export const init = () => {
  showItems();
  setListeners();
}

const setListeners = () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    store.data.push({
      id: store.data.length + 1,
      act: input.value,
      done: false,
    });
    input.value = '';
    setItems();
    showItems();
  });

  ul.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('todo__done')) {
      onDone(e);
    }
    if (e.target.classList.contains('todo__del')) {
      onDelete(e);
    }
  });

  header.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = e.target.dataset.name;
    showItems();
  })
}

const onDone = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  store.data.map(el => {
    if (el.id === currentId) {
      el.done = !el.done;
    }
  });
  setItems();
  showItems();
};

const onDelete = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  store.data = store.data.filter(el => el.id !== currentId);
  console.log(store.data)
  setItems();
  showItems();
};
