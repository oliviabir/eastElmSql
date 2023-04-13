import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/reviews";
import './EditReview.css'

const EditReviewForm = ({ review, setShowEditModal }) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(review.rating)
    const [body, setBody] = useState(review.body)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const errors = [];
        if (body.length > 200) {
            errors.push('Review must be less than 200 characters');
        } else if (body.length < 1) {
            errors.push('Review must contain content')
        }
        if (rating < 1) {
            errors.push('Please enter a rating')
        }

        setErrors(errors);
    }, [body, rating]);

    const ratingArr = [1, 2, 3, 4, 5]

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (errors.length > 0) {
            return
        }

        const payload = {
            user_id: review.user_id,
            product_id: review.product_id,
            rating,
            body
        }

        let editedReview = await dispatch(editReview(payload, review.id))

        if (editedReview) {
            setErrors([])
            setShowEditModal(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul className='errors-list'>
                    {errors.map((error, idx) => (
                        <li key={idx} className='error-messages'>{error}</li>
                    ))}
                </ul>
                <div id='required-message'>All fields are required</div>
                <label className='rating-container'>
                    Rating
                    <div className='rating-button-container'>
                        {ratingArr.map((index) => {
                            index += 1
                            return (
                                <button
                                    type='button'
                                    key={index}
                                    className={index <= rating ? 'on' : 'off'}
                                    id='rating-button'
                                    onClick={() => setRating(index)}
                                >
                                    <span className='star'>&#9733;</span>
                                </button>
                            )
                        })}
                    </div>
                </label>
                <div className='review-submit-container'>
                    <label>
                        <textarea
                            name='body'
                            id='add-review-input'
                            type='text'
                            value={body}
                            placeholder={'Leave a review'}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </label>
                    <button type='submit' id='add-review-btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditReviewForm
