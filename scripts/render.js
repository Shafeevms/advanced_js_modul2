import { getItems, store } from './store.js';

const loader = document.querySelector('.loader');
const ul = document.querySelector('.todo__list');

const showLoader = () => loader.classList.remove('d-none');
const printItems = (selector, string) => selector.innerHtml = string;
const removeLoader = () => loader.classList.add('d-none');
const showItems = () => {
  showLoader();
  getItems();
  printItems(ul, store.data);
  removeLoader();
};

export { removeLoader, showItems };
