import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const AccountButton = () => {
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false)

    const sessionUser = useSelector(state => state.session.user)

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@user.io', 'password'));
    };

    const openMenu = () => {
        if (showMenu) {
            return
        } else {
            setShowMenu(true)
        }
    }

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    return (
        <div>
            <button onClick={openMenu} id='account-links-button'>
                Account
            </button>
            {showMenu && (
                <div className='account-links-menu'>
                    {!sessionUser ?
                        <div>
                            <div>
                                <Link to='/login' className='auth-buttons' id='login-button'>
                                    Login
                                </Link>
                            </div>
                            <br />
                            <div>
                                <Link to='/sign-up' className='auth-buttons' id='signup-button'>
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                        :
                        <div>
                            <div>User:</div>
                            <div>{sessionUser.username}</div>
                        </div>
                    }
                    <br />
                    {sessionUser?.id === 1 ?
                        null
                        : <div>
                            <button onClick={demoLogin} className='demo-login-btn'>Demo Login</button>
                        </div>
                    }
                    <br />
                    {!sessionUser ? null
                        : <div>
                            <LogoutButton />
                        </div>
                    }

                </div>
            )}
        </div>
    )
}

export default AccountButton
