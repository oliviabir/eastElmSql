import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewOrders, removeOrder } from "../../store/orders"
import ItemInfo from "./ItemInfo"
import './OrderHistory.css'

const OrderHistory = () => {
    const dispatch = useDispatch()

    const [orderCanceled, setOrderCanceled] = useState(false)

    const sessionUser = useSelector(state => state.session.user)

    const orders = useSelector((state) => {
        return Object.values(state.orders)
    })

    const usersOrders = orders.filter(order => order?.user_id === sessionUser?.id)

    useEffect(() => {
        dispatch(viewOrders())
    }, [dispatch, orderCanceled])

    let orderArr = []

    const pushOrders = (id) => {
        orderArr.push(id)
    }

    const handleCancel = () => {
        const itemRemoved = orderArr.pop()

        dispatch(removeOrder(itemRemoved))

        if (orderArr.length > 0) {
            handleCancel()
        } else {
            setOrderCanceled(true)
        }
    }

    return (
        <div className='order-history-container'>
            <h2 className='order-history-header'>Order History</h2>
            {usersOrders?.length === 0 ?
                <h2 className='no-orders-tag'>You have no orders</h2>
                : usersOrders?.map((order) => (
                    <div>
                        <div key={order.id}>
                            <ItemInfo order={order} />
                            {pushOrders(order.id)}
                            <br />
                        </div>
                    </div>
                ))
            }
            {usersOrders.length > 0 ? <button onClick={handleCancel} className='cancel-order-btn'>Cancel All Orders</button> : null}
        </div>
    )
}

export default OrderHistory
