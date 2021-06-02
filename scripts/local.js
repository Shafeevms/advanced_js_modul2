import { store } from "./store";

const page = new URLSearchParams(window.location.search).get('page');
export const getData = (page) => store.data = localStorage.getItem(page);
