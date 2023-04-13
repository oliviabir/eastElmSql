import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import './Sofas.css'

const Sofas = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const sofas = products.filter(product => product.category === 'sofas')

    return (
        <div className='sofas-container'>
            {sofas.map((sofa) => (
                <Link to={`/products/${sofa.id}`} key={sofa.id} className='sofa-link-container'>
                    <img src={sofa.img_one} alt={`${sofa.name}-image`} className='sofa-link-image'/>
                    <div className='sofa-link-name'>{sofa.name}</div>
                    <div className='sofa-link-price'>${sofa.price}</div>
                    <br />
                </Link>
            ))}
        </div>
    )
}

export default Sofas
