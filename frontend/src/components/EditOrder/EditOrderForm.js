import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editOrder } from "../../store/orders";
import './EditOrder.css'

const EditOrderForm = ({ order, setShowModal }) => {
    const dispatch = useDispatch()

    const [numOfProducts, setNumOfProducts] = useState(order.num_of_products)
    const [instructions, setInstructions] = useState(order.instructions)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const errors = [];
        if (numOfProducts > 5) {
            errors.push('All items limited to a quantity of 5');
        }  else if (numOfProducts < 1) {
            errors.push('Must have at least one of this item')
        }
        if (instructions.length > 50) {
            errors.push('Instructions limited to 50 characters')
        }

        setErrors(errors);
    }, [numOfProducts, instructions]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (errors.length > 0) {
            return
        }

        const payload = {
            user_id: order.user_id,
            product_id: order.product_id,
            num_of_product: numOfProducts,
            instructions
        }

        let editedOrder = await dispatch(editOrder(payload, order.id))

        if (editedOrder) {
            setErrors([])
            setShowModal(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx} className='error-messages'>{error}</li>
                ))}
            </ul>
            <div className='edit-input-container'>
                <input
                    name='num_of_product'
                    type='number'
                    min='1'
                    max='5'
                    className='edit-num-input'
                    defaultValue={order.num_of_product ? order.num_of_product : 1}
                    onChange={(e) => setNumOfProducts(e.target.value)}
                    placeholder={'Number of products'}
                />
                <textarea
                    name='instructions'
                    className='edit-instructions-input'
                    // type='text'
                    defaultValue={order.instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder={'Add Delivery Instructions'}
                />
            <button type='submit' className='confirm-edit-btn'>Confirm</button>
            </div>
        </form>
    )
}

export default EditOrderForm
