import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewProducts } from "../../store/products";
import { addToCart } from "../../store/cart";
import Reviews from "../Reviews";
import './SingleProduct.css'

const SingleProduct = () => {
    const productIdObj = useParams()
    const productId = productIdObj.id
    const history = useHistory()

    if (productId > 32) {
        history.push('/404')
    }

    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)

    const products = useSelector((state) => {
        return Object.values(state.products);
    });

    const product = products.find(product => product.id == productId)

    const [addedToCart, setAddedToCart] = useState(false)
    const [alreadyInCart, setAlreadyInCart] = useState(false)


    useEffect(() => {
        dispatch(viewProducts());
    }, [dispatch]);


    const handleAddItemToCart = () => {
        dispatch(addToCart(product))
        setAddedToCart(true)
        if (addedToCart) {
            setAlreadyInCart(true)
        }
    }

    return (
        <div className='single-product-container'>
            <div className='single-product-info-container'>
                <img src={product?.img_one} className='single-product-image'/>
                <div className='single-product-right-panel'>
                    <div className='single-product-name'>{product?.name}</div>
                    <div className='single-product-price'>${product?.price}</div>
                    {sessionUser ?
                        <button onClick={handleAddItemToCart} className='single-product-add-button'>Add to Cart</button>
                    : null}
                    {addedToCart ? <div>Item added to your cart</div> : null}
                    {alreadyInCart ? <div>This item is already in your cart</div> : null}
                    <Reviews id={product?.id} product={product}/>
                </div>
            </div>
            <div className='single-product-reviews-container'>
            </div>
        </div>
    )
}

export default SingleProduct
