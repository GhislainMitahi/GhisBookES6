import listbooks from './modules/listbooks.js';
import listNavMenu from './modules/listNavMenu.js';
import addMenu from './modules/addMenu.js';
import contactNavMenu from './modules/contactNavMenu.js';
import luxon from './modules/Luxun.js';

const { DateTime } = luxon;
const now = DateTime.now();

const list = document.getElementById('list');
const time = document.getElementById('time');
const main = document.getElementById('main');

const listMenu = document.getElementById('listMenu');
const addNewMenu = document.getElementById('addNewMenu');
const contactMenu = document.getElementById('contactMenu');

let menu = '';

const timeString = `${now.c.year}/${now.c.month}/${now.c.day}  ${now.c.hour}:${now.c.minute}:${now.c.second}`;
time.innerText = timeString;

// eslint-disable-next-line no-constant-condition
if (menu === '' || 'list') {
  if (listbooks.length <= 0) {
    const noBooks = document.createElement('h1');
    noBooks.innerText = 'Please add some books!';
    main.append(noBooks);
  }
  listNavMenu();
}

listMenu.addEventListener('click', () => {
  main.innerHTML = '';
  list.innerHTML = '';
  menu = 'list';
  listNavMenu();
});

addNewMenu.addEventListener('click', () => {
  main.innerHTML = '';
  addMenu();
});

contactMenu.addEventListener('click', () => {
  main.innerHTML = '';
  contactNavMenu();
});