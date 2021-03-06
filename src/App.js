import { useState, useEffect } from 'react';
import './App.css';
import { getUser, logout } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import BookListPage from './Components/BookListPage';
import BookDetailPage from './Components/BookDetailPage';
import CreateBookPage from './Components/CreateBookPage';

function App() {
  // track user(state), useEffect(fetch -> getUser), logout func
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const data = getUser();

      setUser(data);
    }

    fetchUser();
  }, []);

  async function handleLogout() {
    await logout();

    user('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
          <>
            <button
              className='logout'
              onClick={handleLogout}>Logout</button>
            <div className='top'>
              <NavLink to="/book-list" >
              Your Books
              </NavLink>
              <NavLink to="/create" >
              Create Book
              </NavLink>
            </div>
          </>
          }
        </header>
        {/* if user, render list/create/logout links */}
        {/* routes: auth, home/list, book-detail, create */}
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="book-list"/>
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/book-list">
              {
                user
                  ? <BookListPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/book-list/:id">
              {
                user
                  ? <BookDetailPage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/create">
              {
                user
                  ? <CreateBookPage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
