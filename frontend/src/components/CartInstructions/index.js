import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import CartInstructionsModal from "./CartInstructionsModal";
import './CartInstructions.css'

const CartInstructions = ({ cartItem }) => {

    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <div>
            <button onClick={() => setShowModal(true)} className='add-review-button'>Quantity and Delivery Instructions</button>
            {showModal && (
                <Modal onClose={handleClose}>
                    <CartInstructionsModal cartItem={cartItem} setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    )
}

export default CartInstructions
