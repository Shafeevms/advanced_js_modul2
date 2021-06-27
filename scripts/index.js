import { showItems } from './render.js';
import { store, setItems, onDone } from './store.js';

export const input = document.querySelector('.js-input');
const addBtn = document.querySelector('.js-add-btn');
const ul = document.querySelector('.todo__list');
const header = document.querySelector('.header');
const radioBtn = document.querySelector('.js-radio');

export const init = async() => {
  await showItems();
  setListeners();
}

const setListeners = () => {
  addBtn.addEventListener('click', addTodo);

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

const onDelete = (e) => {
  const currentId = +e.target.closest('li').dataset.id;
  store.data = store.data.filter(el => el.id !== currentId);
  setItems();
  showItems();
};

// ? подумать как состояние какое хранилище выбрано влияет на всю работу

const addTodo = (e) => {
  e.preventDefault();
  console.log(1)
  setItems(input.value);
  showItems();
  input.value = '';
};
