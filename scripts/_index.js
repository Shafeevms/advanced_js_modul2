import { showItems } from './render.js';
import { setItems, store } from './store.js';

export const input = document.querySelector('.js-input');
const addBtn = document.querySelector('.js-add-btn');
const ul = document.querySelector('.todo__list');
const header = document.querySelector('.header');
const radioBtn = document.querySelector('.js-radio');

export const init = () => {
  showItems();
  setListeners();
}

const setListeners = () => {
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    store.data.push({
      id: store.data.length + 1,
      name: input.value,
      done: false,
    });
    setItems(input.value);
    showItems();
    input.value = '';
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
  radioBtn.addEventListener('change', (e) => {
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
  setItems();
  showItems();
};

// ? подумать как состояние какое хранилище выбрано влияет на всю работу
