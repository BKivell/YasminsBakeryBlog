import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';
require('dotenv').config();

const expectedUsername = process.env.USERNAME;
const expectedPassword = process.env.PASSWORD;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();



  const handleLoginClick = () => {
    // Retrieve the username and password from environment variables

    console.log(process.env.NODE_ENV);
    console.log(expectedPassword + password);
    // Check if the provided username and password match the expected credentials
    if (username === expectedUsername && password === expectedPassword) {
      // Redirect to a protected route (e.g., dashboard) upon successful login
      router.push('/dashboard');
    } else {
      // Handle login error
      setError('Invalid username or password');
    }
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{'Login'}</h1>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLoginClick} className={styles.button}>
          {'Login'}
        </button>
        <button onClick={handleBackToHome} className={styles.button}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
