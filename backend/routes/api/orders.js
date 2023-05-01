const express = require('express')
const router = express.Router()

const { requireAuth } = require('../../utils/auth')
const { Order, OrderProduct, Product } = require('../../db/models')

//Get users orders ============================>
router.get('/', requireAuth, async (req, res) => {
    const usersOrders = await Order.findAll({
        where: {
            userId: req.user.id
        },
        include: {
            model: OrderProduct
        }
    })

    res.json(usersOrders)
})

//Add to order ================================>
router.post('/', requireAuth, async (req, res) => {
    const {  instructions, productId, quantity } = req.body
    const userId = req.user.id

    const newOrder = await Order.create({
        userId,
        instructions
    })

    const newRecord = await OrderProduct.create({
        orderId: newOrder.id,
        productId,
        quantity
    })

    console.log(newRecord)

    res.json(newOrder)
})

//Update Order ===============================>
router.put('/:id', requireAuth, async (req, res) => {
    const order = await Order.findByPk(req.params.id)

    if (!order) return res.status(404).json({ message: 'Order could not be found' })

    if (order.userId !== req.user.id) return res.status(403).json({ message: 'Forbidden' })

    const { instructions } = req.body
    const updatedOrder = await order.update({
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
