import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getBookById } from '../services/fetch-utils';

export default function BookDetailPage() {
  // state (singleBook, useRouteMatch), useEffect(fetch -> getBookID)
  const [bookDetail, setBookDetail] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetchSingleBook() {
      const data = await getBookById(match.params.id);

      setBookDetail(data);
    }

    fetchSingleBook();
  }, [match]);

  return (
    <div className='detail'>
      {/* detail page elems (title, author, publisher, etc) */}
      <h1>{bookDetail.title}</h1>
      <h2>{bookDetail.author}</h2>
      <p>{bookDetail.release_year}</p>
      <div className='book-info'>
        <p>
          Genre:
          {bookDetail.genre}
        </p>
        <p>
          Series:
          {/* boolean needs to render as STRING */}
          {bookDetail.series ? 'yes' : 'no'}
        </p>
      </div>
      <p>{bookDetail.description}</p>
    </div>
  );
}
