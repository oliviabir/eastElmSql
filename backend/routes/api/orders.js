const express = require('express')
const router = express.Router()

const { requireAuth } = require('../../utils/auth')
const { Order } = require('../../db/models')

//Get users orders ============================>
router.get('/', requireAuth, async (req, res) => {
    const usersOrders = await Order.findAll({
        where: {
            userId: req.user.id
        }
    })

    res.json(usersOrders)
})

//Add to order ================================>
router.post('/', requireAuth, async (req, res) => {
    const { productId, quantity, instructions } = req.body
    const userId = req.user.id

    const newOrder = await Order.create({
        userId,
        productId,
        quantity,
        instructions
    })

    res.json(newOrder)
})

//Update Order ===============================>
router.put('/:id', requireAuth, async (req, res) => {
    const order = await Order.findByPk(req.params.id)

    if (!order) return res.status(404).json({ message: 'Order could not be found' })

    if (order.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' })

    const { quantity, instructions } = req.body
    const updatedOrder = await order.update({
        quantity,
        instructions
    })

    res.json(updatedOrder)
})

//Delete Order ==============================>
router.delete('/:id', requireAuth, async (req, res) => {
    const order = await Order.findByPk(req.params.id)

    if (!order) return res.status(404).json({ message: 'Order could not be found' })

    if (order.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' })

    await order.destroy()
    res.json({ message: 'Successfully deleted' })
})

module.exports = router
