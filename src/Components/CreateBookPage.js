import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createBook } from '../services/fetch-utils';

export default function CreateBookPage() {
  // state for all elems/history, handleSubmit(await createBook, history.push)
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [bookSeries, setBookSeries] = useState(false);
  const [bookDate, setBookDate] = useState();
  const [bookDescription, setBookDescription] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await createBook({
      title: bookTitle,
      author: bookAuthor,
      genre: bookGenre,
      release_year: bookDate,
      series: bookSeries,
      description: bookDescription,
    });

    history.push('./book-list');
  }

  return (
    <div className='create'>
      {/* form(handleSub): all elems (onChange e.target), button */}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
        </label>
        <label>
          Author:
        </label>
        <label>
          Genre:
          <select>
            <option>History</option>
            <option>Mystery</option>
            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Romance</option>
            <option>Comic</option>
          </select>
        </label>
        <label>
          Publish Year:
        </label>
        <label>
          Series:
        </label>
        <label>
          Description:
        </label>
        <button>Create Book</button>
      </form>
    </div>
  );
}
