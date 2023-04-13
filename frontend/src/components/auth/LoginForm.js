import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      let errorsArr = []

      data.forEach(error => {
        const splitError = error.split(':')
        if (errorsArr.length < 2) {
          errorsArr.push(splitError[1])
        }
      })

      setErrors(errorsArr)
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className='login-form-container'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className='error-messages'>{error}</div>
        ))}
      </div>
      <div className='required-message'>Fields marked with * are required</div>
      <div>
        <label htmlFor='email' className='login-input-label'>Email*</label>
        <input
          name='email'
          className='login-input-field'
          id='email-input-field'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password' className='login-input-label'>Password*</label>
        <input
          name='password'
          className='login-input-field'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit' className='login-button'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
