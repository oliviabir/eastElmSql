const express = require('express')
const router = express.Router()

const { requireAuth } = require('../../utils/auth')
const { Review } = require('../../db/models')

//Create Review ========================================>
router.post('/', requireAuth, async (req, res) => {
    const { productId, rating, body } = req.body
    const userId = req.user.id

    const newReview = await Review.create({
        userId,
        productId,
        rating,
        body
    })

    res.json(newReview)
})

//Update Review =======================================>
router.put('/:id', requireAuth, async (req, res) => {
    const review = await Review.findByPk(req.params.id)

    if (!review) return res.status(404).json({ message: 'Review could not be found' })

    if (review.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' })

    const { rating, body } = req.body
    const updatedReview = await review.update({
        rating,
        body
    })

    res.json(updatedReview)
})

//Delete Review ======================================>
router.delete('/:id', requireAuth, async (req, res) => {
    const review = await Review.findByPk(req.params.id)

    if (!review) return res.status(404).json({ message: 'Review could not be found' })

    if (review.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' })

    await review.destroy()
    res.json({ message: 'Successfully deleted' })
})

module.exports = router
