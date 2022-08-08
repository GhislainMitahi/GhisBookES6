import listbooks from './listbooks.js';
import newBook from './Book.js';

const listNavMenu = () => {
  const list = document.getElementById('list');
  const main = document.getElementById('main');
  const allBooks = document.createElement('h1');
  allBooks.innerText = 'All awesome books';
  listbooks.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    const bookTitle = document.createElement('p');
    bookTitle.classList.add('bookTitle');
    bookTitle.innerText = `"${book.title}" by ${book.author}`;
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.innerText = book.author;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerText = listbooks.indexOf(book);
    const id = listbooks.indexOf(book);
    if (id % 2 === 0) {
      bookCard.style.backgroundColor = '#a4f560';
      bookCard.style.outline = 'solid 3px #daa520';
      removeBtn.style.backgroundColor = '#53c453';
      removeBtn.style.color = '#000';
    } else {
      bookCard.style.backgroundColor = '#53c453';
      bookCard.style.outline = 'solid 3px #daa520';
      bookTitle.style.color = '#000';
      removeBtn.style.backgroundColor = '#a4f560';
    }
    removeBtn.addEventListener('click', () => {
      newBook.remove(id);
      document.location.reload();
    });

    bookCard.append(bookTitle, removeBtn);
    list.append(bookCard);
    main.append(allBooks, list);
    return main;
  });
};

export default listNavMenu;