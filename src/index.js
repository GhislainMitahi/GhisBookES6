import listbooks from './modules/listbooks.js';
import listNavMenu from './modules/listNavMenu.js';
import addMenu from './modules/addMenu.js';
import contactNavMenu from './modules/contactNavMenu.js';

const list = document.getElementById('list');
const main = document.getElementById('main');

const listMenu = document.getElementById('listMenu');
const addNewMenu = document.getElementById('addNewMenu');
const contactMenu = document.getElementById('contactMenu');

let menu = '';

// eslint-disable-next-line no-constant-condition
if (menu === '' || 'list') {
  if (listbooks.length <= 0) {
    const noBooks = document.createElement('h1');
    noBooks.innerText = 'Please add some books!';
    main.append(noBooks);
  }
  listNavMenu();
}

// close can't understand this code here
const changeList = () => {
  main.innerHTML = '';
  list.innerHTML = '';
  menu = 'list';
  listNavMenu();
};

const chnageAdd = () => {
  main.innerHTML = '';
  addMenu();
};

const changeContact = () => {
  main.innerHTML = '';
  contactNavMenu();
};

listMenu.addEventListener('click', () => {
  changeList();
});

addNewMenu.addEventListener('click', () => {
  chnageAdd();
});

contactMenu.addEventListener('click', () => {
  changeContact();
});