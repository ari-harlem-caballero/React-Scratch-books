import { useState, useEffect } from 'react';
import Book from './Book';
import { getAllBooks } from '../services/fetch-utils';

export default function BookListPage() {
  // array of books, useEffect(fetch -> getBooks), MAP over arr
  const [bookArr, setBookArr] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getAllBooks();

      setBookArr(data);
    }

    fetchBooks();
  }, []);

  return (
    <div>BookListPage</div>
  );
}
