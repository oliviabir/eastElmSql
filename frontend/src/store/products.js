import { csrfFetch } from './csrf';

const VIEW_PRODUCTS = 'products/VIEW_PRODUCTS'
const VIEW_ONE = 'products/VIEW_ONE'

const view = (products) => ({
    type: VIEW_PRODUCTS,
    products,
});

const viewOne = (product) => ({
    type: VIEW_ONE,
    product
})

export const viewProducts = () => async (dispatch) => {
    const response = await csrfFetch('/api/products/')

    if (response.ok) {
        const products = await response.json()
        dispatch(view(products))
    }
}

export const viewOneProduct = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/products/${id}`)

    if (response.ok) {
        const product = await response.json()
        dispatch(viewOne(product))
        return product
    }
}

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_PRODUCTS:
            const normalizedProducts = {}
            action.products.forEach((product) => {
                normalizedProducts[product.id] = product
            })
            return { ...normalizedProducts }
        case VIEW_ONE:
            const normalizedProduct = {...action.product}
            return normalizedProduct
        default:
            return state
    }
}

export default productsReducer
