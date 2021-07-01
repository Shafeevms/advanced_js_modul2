import { addTodoItem, showItems, todoItem } from './render.js';
import { setItems, onDone, onDelete, store } from './store.js';

export const input = document.querySelector('.js-input');
const addBtn = document.querySelector('.js-add-btn');
const ul = document.querySelector('.todo__list');
const header = document.querySelector('.header');
const radioBtn = document.querySelector('.js-radio');

export const init = async() => {
  await showItems();
  setListeners();
};

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
};

const addTodo = async(e) => {
  e.preventDefault();
  const string = input.value.replace(/[<>/]/g, '');
  await setItems(string);
  console.log(store.currentTodo);
  addTodoItem(ul);
  input.value = '';
};
