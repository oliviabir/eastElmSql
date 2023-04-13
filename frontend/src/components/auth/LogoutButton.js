import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import './LogoutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    e.preventDefault()
    await dispatch(logout());
    history.push('/')
  };

  return <button onClick={onLogout} className='logout-button'>Logout</button>;
};

export default LogoutButton;
