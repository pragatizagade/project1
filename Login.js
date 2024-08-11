import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|in)\.[a-zA-Z]{3,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Invalid email address.');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    // Simulate a successful login
    navigate('/home');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Invalid email address.');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must contain at least one uppercase letter and one special character.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Simulate a successful registration
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Weather App</h2>
      <div className="tabs">
        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>Login</button>
        <button className={activeTab === 'register' ? 'active' : ''} onClick={() => setActiveTab('register')}>Register</button>
      </div>
      {activeTab === 'login' && (
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {activeTab === 'register' && (
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Login;
