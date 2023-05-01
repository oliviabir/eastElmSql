import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewProducts } from "../../store/products"
import EditOrder from "../EditOrder"
import DeleteOrderItem from "../DeleteOrderItem";
import './OrderHistory.css'

const ItemInfo = ({ order }) => {
    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return Object.values(state.products)
    });

    const itemArr = products.filter(product => product.id == order.productId)
    const item = itemArr[0]

    const getProductPrice = (price) => {
        let productPrice
        if (order.num_of_product) {
            productPrice = price * order.num_of_product
        } else {
            productPrice = price
        }
        return productPrice
    }

    useEffect(() => {
        dispatch(viewProducts())
    }, [dispatch])

    return (
        <div className='order-card-container'>
            <img src={item?.img_one} alt={`${item?.name}-image`} className='item-img' />
            <div className='order-info-container'>
                <div className='product-name'>{item?.name}</div>
                <div className='product-price'>${getProductPrice(item?.price)}</div>
                <div className='product-editable-info'>Quantity: {order.num_of_product ? order.num_of_product : 1}</div>
                <div className='product-editable-info'>Instructions: {order.instructions}</div>
                <EditOrder order={order} />
            </div>
            <div className='delete-item-container'>
                <DeleteOrderItem order={order} />
            </div>
        </div>
    )
}

export default ItemInfo
