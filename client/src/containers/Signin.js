import React, { useState } from 'react';

// Custom Components
import Input from '../components/inputbox/Input';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
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
      <button>Sign In</button>
    </div>
  );
};

export default Signin;
