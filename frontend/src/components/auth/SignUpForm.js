import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, repeatPassword));
      if (data) {
        let errorsArr = []

        data.forEach(error => {
          const splitError = error.split(':')
          errorsArr.push(splitError[1])
        })

        setErrors(errorsArr)
      } else {
        <Redirect to='/' />
      }
    } else {
      const data = await dispatch(signUp(username, email, password, repeatPassword));
      if (data) {
        let errorsArr = []

        data.forEach(error => {
          const splitError = error.split(':')
          errorsArr.push(splitError[1])
        })

        setErrors(errorsArr)
      } else {
        <Redirect to='/' />
      }
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signup-form-container'>
      <div>
        {errors?.map((error, ind) => (
          <div key={ind} className='error-messages'>{error}</div>
        ))}
      </div>
      <div className='required-message'>Fields marked with * are required</div>
      <div>
        <label>User Name*</label>
        <input
          type='text'
          className='signup-input-field'
          id='username-input-field'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email*</label>
        <input
          type='text'
          className='signup-input-field'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password*</label>
        <input
          type='password'
          className='signup-input-field'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password*</label>
        <input
          type='password'
          className='signup-input-field'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit' className='signup-button'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
