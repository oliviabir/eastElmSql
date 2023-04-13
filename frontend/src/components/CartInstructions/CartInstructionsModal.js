import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemQuantitiy, updateItemInstructions } from "../../store/cart";
import './CartInstructions.css'

const CartInstructionsModal = ({cartItem, setShowModal}) => {
    const dispatch = useDispatch()

    const cart = JSON.parse(localStorage.getItem('cart'))

    const [quantityChanged, setQuantityChanged] = useState(false)
    const [quantityErrors, setQuantityErrors] = useState([]);
    const [instructionErrors, setInstructionErrors] = useState([])
    const [quantityErrorId, setQuantityErrorId] = useState(0)
    const [instructionErrorId, setInstructionErrorId] = useState(0)

    const updateQuantity = (e, cartItem) => {

        if (e.target.value > 0 && e.target.value < 6) {
            setQuantityErrors([])
            let cart = []

            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                cart = []
            }

            cart.forEach(product => {
                if (product.id === cartItem.id) {
                    product.num_of_product = e.target.value
                    dispatch(updateItemQuantitiy(product, e.target.value))
                }
            })

            setQuantityChanged(current => !current)
            localStorage.setItem('cart', JSON.stringify(cart))
        } else if (e.target.value < 1) {
            setQuantityErrors('Must have at least one of this item in cart')
            setQuantityErrorId(cartItem.id)
            return
        } else if (e.target.value > 5) {
            setQuantityErrors('All items limited to a quantity of 5')
            setQuantityErrorId(cartItem.id)
            return
        }


    }

    const updateInstructions = (e, cartItem) => {

        if (e.target.value.length < 50) {
            setInstructionErrors([])
            let cart = []

            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                cart = []
            }

            cart.forEach(product => {
                if (product.id === cartItem.id) {
                    product.instructions = e.target.value
                    dispatch(updateItemInstructions(product, e.target.value))
                }
            })

            localStorage.setItem('cart', JSON.stringify(cart))

        } else if (e.target.value.length > 50) {
            setInstructionErrors('Instructions limited to 50 characters')
            setInstructionErrorId(cartItem.id)
            return
        }
    }

    const handleSubmit = () => {
        if (quantityErrors.length === 0 && instructionErrors.length === 0) {
            setShowModal(false)
        }
    }

    return (
        <div>
            {quantityErrorId === cartItem.id ? <div className='cart-error-messages'>{quantityErrors}</div> : null}
            {instructionErrorId === cartItem.id ? <div className='cart-error-messages'>{instructionErrors}</div> : null}
            <form className='cart-form'>
                <input
                    name='num_of_product'
                    type='number'
                    min='1'
                    max='5'
                    defaultValue={cartItem.num_of_product ? cartItem.num_of_product : 1}
                    className='quantity-input'
                    onChange={(e) => updateQuantity(e, cartItem)}
                    placeholder={cartItem.num_of_product}
                />
                <textarea
                    name='instructions'
                    type='text'
                    defaultValue={cartItem.instructions}
                    className='instructions-input'
                    onChange={(e) => updateInstructions(e, cartItem)}
                    placeholder={'Delivery Instructions'}
                />
            </form>
            <button onClick={handleSubmit} className='confirm-instructions-btn'>Submit</button>
        </div>
    )
}

export default CartInstructionsModal
