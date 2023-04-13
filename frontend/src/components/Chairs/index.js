import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import './Chairs.css'

const Chairs = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const chairs = products.filter(product => product.category === 'chairs')

    return (
        <div className='chairs-container'>
            {chairs.map((chair) => (
                <Link to={`/products/${chair.id}`} key={chair.id} className='chair-link-container'>
                    <img src={chair.img_one} alt={`${chair.name}-image`} className='chair-link-image'/>
                    <div className='chair-link-name'>{chair.name}</div>
                    <div className='chair-link-price'>${chair.price}</div>
                    <br />
                </Link>
            ))}
        </div>
    )
}

export default Chairs
