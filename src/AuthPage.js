import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage(props) {
    // state (email, pass), handle(signIn, signUp)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    
    const user = await signIn(email, password);

    props.setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);

    props.setUser(user);
  }

  return (
    <div>
      <h1>Welcome to Book That Book</h1>
      {/* form w/ 2 buttons */}
      <form className='auth-form'>
        <label>
          Email:
          <input 
            required type="email"
            value={email} 
            name="email" 
            onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input 
            required type="password"
            value={password} 
            name="password" 
            onChange={e => setPassword(e.target.value)}/>
        </label>
        <button
          type="button"
          onClick={handleSignIn}>
          Sign In
        </button>
        <button
          type="button"
          onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
