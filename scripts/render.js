import { getItems, store } from './store.js';

const loader = document.querySelector('.loader');
const ul = document.querySelector('.todo__list');

const showLoader = () => loader.classList.remove('d-none');
const printItems = (selector, string) => selector.innerHTML = string;
const removeLoader = () => loader.classList.add('d-none');

const showItems = async() => {
  showLoader();
  await getItems();
  printItems(ul, dataString(store.data));
  removeLoader();
};

const dataString = (arr) => {
  return arr.reduce((acc, element) => {
    return acc += todoItem(element);
  }, '')
};

const addTodoItem = (el) => el.insertAdjacentHTML('beforeend', todoItem(store.currentTodo));

const todoItem = (el) => (
  `<li class="todo__item d-flex list-group-item ${el.done ? 'list-group-item-success' : ''}" data-done="${el.done}" data-id="${el.id}">
    <p class="todo__text col-10 mr-auto">${el.name}</p>
    <div class="button-wrapper align-self-center">
      <button data-action="done" class="btn todo__done btn-primary">Готово</button>
      <button data-action="del" class="btn todo__del btn-danger">Удалить</button>
    </div>
  </li>`
);

const markItem = (el) => {
  el.classList.toggle('list-group-item-success');
};

export { removeLoader, showItems, markItem, addTodoItem, todoItem };
