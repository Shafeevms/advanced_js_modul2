const setListeners = () => {
  addBtn.addEventListener('click', addButton());


  ul.addEventListener('click', handlers());


  radioBtn.addEventListener('change', changeStorage())
}

header.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = e.target.dataset.name;
  showItems();
})
