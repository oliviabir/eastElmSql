import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './SearchBar.css'

const SearchBar = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const [query, setQuery] = useState('')

    return (
        <div className='searchbar-container'>
            <input
                className='searchbar-input'
                id='searchbar-input'
                value={query}
                placeholder='Search Products'
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className='search-list'>
                {query
                ? products.filter((product) => {
                    if (product.name.toLowerCase().includes(query.toLowerCase())) {
                        return product
                    } else if (product.category.toLowerCase().includes(query.toLowerCase())) {
                        return product
                    }
                })
                .map((product) => (
                    <div key={product.id} className='search-items'>
                        <a href={`/products/${product.id}`}>
                            <p className='search-product-name'>{product.name}</p>
                        </a>
                    </div>
                ))
                : null}
            </div>
        </div>
    )
}

export default SearchBar
