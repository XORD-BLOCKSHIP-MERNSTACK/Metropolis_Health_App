import React, { useState } from 'react';

// Link
import { Link } from 'react-router-dom';

// Custom Components
import Input from '../components/inputbox/Input';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const resetInputs = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setType('');
  };

  return (
    <div className='container'>
      <Input
        type='text'
        placeholder='Enter Username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type='text'
        placeholder='Enter Type'
        onChange={(e) => setType(e.target.value)}
      />
      <button>Sign Up</button>
      <Link to='/signin'>
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default SignUp;
