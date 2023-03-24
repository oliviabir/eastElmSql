import { csrfFetch } from './csrf';

const VIEW_ORDERS = 'orders/VIEW_ORDERS'
const REMOVE_ORDER = 'orders/REMOVE_ORDER'
const EDIT_ORDER = 'orders/EDIT_ORDER'

const view = (orders) => ({
    type: VIEW_ORDERS,
    orders,
})

const remove = (order) => ({
    type: REMOVE_ORDER,
    order,
})

const edit = (order) => ({
    type: EDIT_ORDER,
    order
})

export const viewOrders = () => async (dispatch) => {
    const response = await csrfFetch('/api/orders')

    if (response.ok) {
        const orders = await response.json()
        dispatch(view(orders))
    }
}

export const removeOrder = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/orders/${id}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(remove(id));
        return response;
    }

}

export const editOrder = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/orders/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const order = await response.json()
        dispatch(edit(order))
        return order
    }
}

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_ORDERS:
            const normalizedOrders = {}
            action.orders.orders.forEach((order) => {
                normalizedOrders[order.id] = order
            })
            return {...normalizedOrders}
        case REMOVE_ORDER:
            const deleteState = { ...state }
            delete deleteState[action.order]
            return deleteState
        case EDIT_ORDER:
            const updatedState = {
                ...state,
                [action.order.id]: {
                    ...state[action.order.id],
                    ...action.order
                }
            }
            return updatedState
        default:
            return state
    }
}

export default ordersReducer
