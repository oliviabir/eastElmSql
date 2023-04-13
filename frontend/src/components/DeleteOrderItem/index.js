import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeOrder } from '../../store/orders'
import './DeleteOrderItem.css'

function DeleteOrderItem({ order }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async (e) => {
        e.preventDefault()

        let itemDeleted = await dispatch(removeOrder(order.id))
        if (itemDeleted) {
            return history.push('/orders')
        }
    }

    return (
        <button id='delete-item-btn' onClick={handleDelete}>Remove Item</button>
    )
}

export default DeleteOrderItem
