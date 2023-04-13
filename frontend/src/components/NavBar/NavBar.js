import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, Link } from 'react-router-dom';
import LowerNavBar from '../LowerNavBar';
import SearchBar from '../SearchBar';
import AccountButton from './AccountButton';
import './NavBar.css'

const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user)

  return (
    <nav>
      <ul>
        <li>
          <SearchBar />
        </li>
        <li>
          <NavLink to='/' exact={true} className='name-home-link'>
            east-elm
          </NavLink>
        </li>
        <div className='right-links'>
          {sessionUser ?
            <div>
              <NavLink to='/orders' exact={true} id='order-history-link'>
                Order History
              </NavLink>
              <NavLink to='/cart' exact={true} id='cart-link'>
                Cart
              </NavLink>
            </div>
            :
            <div>
              <Link to={{ pathname: 'https://github.com/oliviabir' }} className='about-links' target='_blank'>
                <i className='fa-brands fa-github'></i>
              </Link>
              <Link to={{ pathname: 'https://www.linkedin.com/in/olivia-bir-74b16b7b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhIpATu1WRI2%2FsBi7q7h8Hw%3D%3D' }} className='about-links' target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
              </Link>
            </div>
          }
          <li>
            <AccountButton />
          </li>
        </div>
      </ul>
      <LowerNavBar className='lower-nav' />
    </nav>
  );
}

export default NavBar;
