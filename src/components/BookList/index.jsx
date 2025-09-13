import React from 'react';
import { useSelector } from 'react-redux';

function BooksList () {
  const books = useSelector(state => state.booksList.list);
  const status = useSelector(state => state.booksList.status);

  if (status === 'loading') return <p>Завантаження...</p>;
  if (status === 'failed') return <p>Помилка при завантаженні книг</p>;

  return (
    <div>
      <h2>Книга під ваш настрій</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> – {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
