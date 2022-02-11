import { Link } from 'react-router-dom';

export default function Book({ book }) {
  // LINK to detail page, holds detail info (title, author, etc) IE: single div in ListPage
  return (
    <Link to={`/book-list/${book.id}`}>
      <div className='book-list'>
        <h2>
          {book.title}
        </h2>
        <p className='list-author'>
          {book.author}
        </p>
        <p className='list-genre'>
          {book.genre}
        </p>
      </div>
    </Link>
  );
}
