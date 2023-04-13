import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import EditReviewForm from "./EditReviewForm";
import './EditReview.css'

const EditReview = ({ review }) => {
    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <div>
            <button onClick={() => setShowEditModal(true)} className='reviews-buttons'>Edit Review</button>
            {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)}>
                    <EditReviewForm review={review} setShowEditModal={setShowEditModal} />
                </Modal>
            )}
        </div>
    )
}

export default EditReview
