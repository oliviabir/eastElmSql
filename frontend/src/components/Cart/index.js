import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, removeFromCart } from "../../store/cart";
import CartInstructions from "../CartInstructions";
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()

    const cartState = useSelector((state) => state.cart)
    const sessionUser = useSelector((state) => state.session.user);
    const cart = JSON.parse(localStorage.getItem('cart'))

    const [showModal, setShowModal] = useState(false)
    const [checkoutComplete, setCheckoutComplete] = useState(false)
    const [itemRemoved, setItemRemoved] = useState(false)

    const getProductPrice = (price, quantity) => {
        const productPrice = price * quantity
        return productPrice
    }

    const cartRemoval = (cartItem) => {
        const newCart = cart.filter(product => product.id !== cartItem.id)

        localStorage.setItem('cart', JSON.stringify(newCart))

        dispatch(removeFromCart(cartItem))
        setItemRemoved(current => !current)
    }

    const totalPrice = () => {
        let priceArr = []

        cart.forEach(product => {
            if (product.num_of_product) {
                const productTotal = product.price * product.num_of_product
                priceArr.push(productTotal)
            } else {
                priceArr.push(product.price)
            }
        })

        let priceSum = 0

        if (priceArr.length > 0) {
            priceSum = priceArr.reduce(
                (prev, curr) => prev + curr
            );
        }

        return priceSum
    }

    const handleCheckout = async () => {
        let cart = []

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }

        const user_id = sessionUser?.id

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i]

            const payload = {
                user_id,
                productId: product?.id,
                quantity: product?.num_of_product,
                instructions: product?.instructions
            }

            await dispatch(checkoutCart(payload))
            await dispatch(removeFromCart(product))

        }

        setCheckoutComplete(true)

    }

    return (
        <div className='cart-page'>
            <h2 className='cart-header'>Shopping Cart</h2>
            {checkoutComplete ? <div className='empty-cart-tag'>Cart Empty</div> :
                cart?.map((cartItem) => (
                    <div key={cartItem.id} className='cart-card-container'>
                        <img src={cartItem.img_one} className='item-img' />
                        <div className='cart-info-container'>
                            <div className='item-name'>{cartItem.name}</div>
                            {cartItem.num_of_product > 1 ?
                                <div className='item-price'>
                                    ${getProductPrice(cartItem.price, cartItem.num_of_product)}
                                </div>
                                : <div className='item-price'>${cartItem.price}</div>}
                            <CartInstructions cartItem={cartItem} />
                            <div>Quantity: {cartItem.num_of_product ? cartItem.num_of_product : 1}</div>
                            <div>Delivery Instructions: {cartItem.instructions}</div>
                            <button onClick={() => cartRemoval(cartItem)} className='remove-item-btn'>Remove Item</button>
                        </div>
                    </div>
                ))}
            {totalPrice() > 0 ? <p className='total-price-display'>Total:${totalPrice()}</p> : null}
            {cart.length > 0 ? <button onClick={handleCheckout} className='checkout-cart-btn'>Checkout</button> : null}
        </div>
    )
}

export default Cart
