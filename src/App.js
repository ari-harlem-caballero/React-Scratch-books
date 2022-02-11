import { useState, useEffect } from 'react';
import './App.css';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';

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

  return (
    <div className="App">
      hi
      {/* if user, render list/create/logout links */}
      {/* routes: auth, home/list, book-detail, create */}
    </div>
  );
}

export default App;
