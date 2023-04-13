import React from 'react';
import { Link } from 'react-router-dom';
import './LowerNavBar.css'

const LowerNavBar = () => {
    return (
        <div className='lower-nav-container'>
            <Link to='/products' className='lower-nav-links'>
                All Products
            </Link>
            <Link to='/sofas' className='lower-nav-links'>
                Sofas
            </Link>
            <Link to='/tables' className='lower-nav-links'>
                Tables
            </Link>
            <Link to='/chairs' className='lower-nav-links'>
                Chairs
            </Link>
        </div>
    )
}

export default LowerNavBar
