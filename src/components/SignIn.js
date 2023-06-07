import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); 

  const handleSignIn = (e) => {
    e.preventDefault();
    const userCredentials = {
        email,
        password,
      };
  
      // Send a POST request to the backend API to authenticate the user
      axios.post('http://localhost:8800/api/login', userCredentials)
      .then((response) => {
        // Assuming the API returns the user object
        const user = response.data.user;
        setUser(user); // Store the user in the application's state
        navigate('/dashboard'); // Navigate to the dashboard
      })
      .catch((error) => {
        console.error(error);
        alert('Sign In failed');
      });
    // Perform sign-in logic here
  };

  return (
    <div className="signin-container">
      <form className="signin-form-container" onSubmit={handleSignIn}>
        <h2 className="signin-title">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />
        <button type="submit" className="signin-button">Sign In</button>
        <Link to="/signup" className="signin-register-link">New user? Sign Up</Link>
      </form>
    </div>
  );
};

export default SignIn;
