import { csrfFetch } from './csrf';

const ADD_TO_CART = 'cart/ADD_TO_CART'
const UPDATE_CART_QUANTITY = 'cart/UPDATE_CART_QUANTITY'
const UPDATE_CART_INSTRUCTIONS = 'cart/UPDATE_CART_INSTRUCTIONS'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'
const CHECKOUT_CART = 'cart/CHECKOUT_CART'

const addItem = (cart) => ({
    type: ADD_TO_CART,
    cart
})

const updateCartQuantity = (cart) => ({
    type: UPDATE_CART_QUANTITY,
    cart
})

const updateCartInstructions = (cart) => ({
    type: UPDATE_CART_INSTRUCTIONS,
    cart
})

const removeItem = (cart) => ({
    type: REMOVE_FROM_CART,
    cart
})

const checkout = (newOrder) => ({
    type: CHECKOUT_CART,
    newOrder
})

export const addToCart = (product) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    const duplicates = cart.filter(cartItem => cartItem.id === product.id)

    if (duplicates.length === 0) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(addItem(cart))
    }

}

export const updateItemQuantitiy = (product, quantity) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    product['num_of_product'] = quantity

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(updateCartQuantity(cart))
}

export const updateItemInstructions = (product, instructions) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    product['instructions'] = instructions

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(updateCartInstructions(cart))
}

export const removeFromCart = (product) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    const newCart = cart.filter(cartItem => cartItem.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(newCart))
    dispatch(removeItem(newCart))
}

export const checkoutCart = (product) => async (dispatch) => {
    const response = await csrfFetch('/api/orders/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    const newOrder = await response.json();

    if (newOrder) {
      dispatch(checkout(newOrder));
      localStorage.setItem('cart', [])
    }

    return newOrder;
}

const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...action.cart]
            }
        case UPDATE_CART_QUANTITY:
            return {
                cart: [...action.cart]
            }
        case UPDATE_CART_INSTRUCTIONS:
            return {
                cart: [...action.cart]
            }
        case REMOVE_FROM_CART:
            return {
                cart: [...action.cart]
            }
        case CHECKOUT_CART:
            const addState = { ...state, [action.newOrder.id]: action.newOrder };
            return addState;
        default:
            return state
    }
}

export default cartReducer
