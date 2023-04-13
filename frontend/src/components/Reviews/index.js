import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal';
import { viewReviews } from "../../store/reviews"
import AddReviewForm from "../AddReview";
import DeleteReview from "../DeleteReview"
import EditReview from "../EditReview"
import './Reviews.css'

const Reviews = ({ id, product }) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)

    const sessionUser = useSelector(state => state.session.user)
    const reviewsState = useSelector((state) => {
        return Object.values(state.reviews)
    })

    const reviews = reviewsState.filter(review => review.product_id == id)

    const ratingArr = [1, 2, 3, 4, 5]

    useEffect(() => {
        dispatch(viewReviews())
    }, [dispatch])

    return (
        <div className='reviews-container'>
            <h2 className='reviews-heading'>Reviews</h2>
            {sessionUser ?
                <button onClick={() => setShowModal(true)} className='add-review-button'>Leave a Review</button>
                : null}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddReviewForm productId={product?.id} setShowModal={setShowModal} />
                </Modal>
            )}
            {reviews.map((review) => (
                <div key={review.id} className='single-review-container'>
                    {ratingArr.map((index) => {
                        index += 1
                        return (
                            <span key={index} className={index <= review.rating ? 'on' : 'off'}>&#9733;</span>
                        )
                    })}
                    <div id='review-body'>{review.body}</div>
                    {(sessionUser?.id == review.user_id) ? (
                        <div>
                            <EditReview review={review} />
                            <DeleteReview review={review} productId={id} />
                        </div>
                    ) : null}
                    <br />
                </div>
            ))}
        </div>
    )
}

export default Reviews
