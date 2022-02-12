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
      <h2>Create New Book:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            required name='title'
            value={bookTitle}
            onChange={e => setBookTitle(e.target.value)}/>
        </label>
        <label>
          Author:
          <input 
            required name='author'
            value={bookAuthor}
            onChange={e => setBookAuthor(e.target.value)}
          />
        </label>
        <label>
          Genre:
          <select
            required value={bookGenre}
            onChange={e => setBookGenre(e.target.value)}
          >
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
          <input 
            required name='release_year'
            value={bookDate}
            onChange={e => setBookDate(e.target.value)}
          />
        </label>
        <label>
          Apart of Series:
          <select
            required value={bookSeries}
            onChange={e => setBookSeries(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <label>
          Description:
          <textarea 
            required name='description'
            value={bookDescription}
            onChange={e => setBookDescription(e.target.value)}
          />
        </label>
        <button>Create Book</button>
      </form>
    </div>
  );
}
