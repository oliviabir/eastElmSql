import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import './Tables.css'

const Tables = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const tables = products.filter(product => product.category === 'tables')

    return (
        <div className='tables-container'>
            {tables.map((table) => (
                <Link to={`/products/${table.id}`} key={table.id} className='table-link-container'>
                    <img src={table.img_one} alt={`${table.name}-image`} className='table-link-image'/>
                    <div className='table-link-name'>{table.name}</div>
                    <div className='table-link-price'>${table.price}</div>
                    <br />
                </Link>
            ))}
        </div>
    )
}

export default Tables
