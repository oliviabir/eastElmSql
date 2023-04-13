import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { viewProducts } from "../../store/products"
import './Products.css'

const Products = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    useEffect(() => {
        dispatch(viewProducts())
    }, [dispatch])

    return (
        <div className='product-container'>
            {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id} className='product-link-container'>
                    <img src={product.img_one} alt={`${product.name}-image`} className='product-link-image'/>
                    <div className='product-link-name'>{product.name}</div>
                    <div className='product-link-price'>${product.price}</div>
                    <br />
                </Link>
            ))}
        </div>
    )
}

export default Products
