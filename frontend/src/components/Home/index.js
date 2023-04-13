import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const sessionUser = useSelector((state) => state.session.user)

    const tables = products?.filter(product => product.category === 'tables')
    const sofas = products?.filter(product => product.category === 'sofas')
    const chairs = products?.filter(product => product.category === 'chairs')


    return (
        <div className='main-page-container'>
            <div className='welcome-message-container'>
                <h2 className='welcome-heading'>Welcome to east-elm</h2>
                <p className='welcome-message'>A loose West Elm clone and home to high-end and unique furniture</p>
                {sessionUser ? <p className='welcome-message' id='line-two'>Enjoy shopping {sessionUser.username}!</p> :
                <p className='welcome-message' id='line-two'>Feel free to browse, or click the account button to log in</p>}
            </div>
            <p className='link-heading'>Categories</p>
            <div className='category-links'>
                <Link to={`/tables`} className='category-link-container'>
                    <img src={tables[6]?.img_one} alt={`${tables[6]?.name}-image`} className='category-link-image' />
                    <div className='category-link-descriptor'>Tables</div>
                </Link>
                <Link to={`/sofas`} className='category-link-container'>
                    <img src={sofas[2]?.img_one} alt={`${sofas[2]?.name}-image`} className='category-link-image' />
                    <div className='category-link-descriptor'>Sofas</div>
                </Link>
                <Link to={`/chairs`} className='category-link-container'>
                    <img src={chairs[9]?.img_one} alt={`${chairs[9]?.name}-image`} className='category-link-image' />
                    <div className='category-link-descriptor'>Chairs</div>
                </Link>
            </div>
            <p className='link-heading'>Featured Products</p>
            <div className='featured-links'>
                <Link to={`/products/${products[2]?.id}`} className='featured-link-container'>
                    <img src={products[2]?.img_one} alt={`${products[2]?.name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[2]?.name}</div>
                    <div className='featured-link-price'>${products[2]?.price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[5]?.id}`} className='featured-link-container'>
                    <img src={products[5]?.img_one} alt={`${products[5]?.name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[5]?.name}</div>
                    <div className='featured-link-price'>${products[5]?.price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[7]?.id}`} className='featured-link-container'>
                    <img src={products[7]?.img_one} alt={`${products[7]?.name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[7]?.name}</div>
                    <div className='featured-link-price'>${products[7]?.price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[24]?.id}`} className='featured-link-container'>
                    <img src={products[24]?.img_one} alt={`${products[24]?.name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[24]?.name}</div>
                    <div className='featured-link-price'>${products[24]?.price}</div>
                    <br />
                </Link>
            </div>
        </div>
    )
}

export default Home
