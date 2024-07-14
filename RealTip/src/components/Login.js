import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'tipsy@gmail.com' && password === '1234q') {
      setAuth(true);
      if (rememberMe) {
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      }
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form className='form' onSubmit={handleSubmit}>
        <h2>ADMIN LOGIN</h2>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </label>
        <label className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember Me
        </label>
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
