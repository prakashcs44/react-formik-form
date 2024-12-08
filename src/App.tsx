import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import './App.css';

const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="app-container">
      <div className="form-card">
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <button
          className="toggle-button"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Go to Login' : 'Go to Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default App;
