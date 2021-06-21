import { store } from "./store";

console.log('Серверное хранилище');

const URL = 'http://localhost:3000/api/todos';

export const getData = () => {
  return fetch(URL)
          .then(res => res.json())
          .then(res => store.data = [...res])
};

// export const setData = () => {
//   fetch(URL, {
//     method: POST
//   })
// };
