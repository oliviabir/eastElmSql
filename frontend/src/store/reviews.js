import { csrfFetch } from './csrf';

const VIEW_USER_REVIEWS = 'reviews/VIEW_USER_REVIEWS'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'

const view = (reviews) => ({
    type: VIEW_USER_REVIEWS,
    reviews
})

const remove = (review) => ({
    type: REMOVE_REVIEW,
    review
})

const add = (newReview) => ({
    type: ADD_REVIEW,
    newReview
})

const edit = (review) => ({
    type: EDIT_REVIEW,
    review
})

export const viewUserReviews = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews')

    if (response.ok) {
        const reviews = await response.json()
        dispatch(view(reviews))
    }
}

export const removeReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(remove(id));
        return response
    }
}

export const addReview = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/reviews/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    const newReview = await response.json()

    if (newReview) {
        dispatch(add(newReview))
    }
    return newReview
}

export const editReview = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const review = await response.json()
        dispatch(edit(review))
        return review
    }
}


const reviewsReducer = (state = {}, action) => {
    switch(action.type) {
        case VIEW_REVIEWS:
            const normalizedReviews = {}
            action.reviews.reviews.forEach((review) => {
                normalizedReviews[review.id] = review
            })
            return {...normalizedReviews}
        case REMOVE_REVIEW:
            const deleteState = {...state}
            delete deleteState[action.review]
            return deleteState
        case ADD_REVIEW:
            const addState = { ...state, [action.newReview.id]: action.newReview }
            return addState
        case EDIT_REVIEW:
            const updatedState = {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review
                }
            }
            return updatedState
        default:
            return state
    }
}

export default reviewsReducer
