import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
    <Link to="https://chat.openai.com/">
      <button>Sign Up</button>
    </Link>
  );
};

export default SignUpButton;
