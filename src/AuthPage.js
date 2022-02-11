import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage(props) {
    // state (email, pass), handle(signIn, signUp)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    
    const user = await signIn(email, password);

  }

  async function handleSignUp(e) {
    e.preventDefault();

  }

  return (
    <div>AuthPage
      {/* form w/ 2 buttons */}
    </div>
  );
}
