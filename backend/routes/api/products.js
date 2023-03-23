const express = require('express')
const router = express.Router()

const { Product, Review } = require('../../db/models')

//Get all Products =============================>
router.get('/', async (req, res) => {
    const products = await Product.findAll()

    res.json(products)
})

//Get one Product =============================>
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    if (!product) return res.status(404).json({ message: 'Could not find product' })

    const reviews = await Review.findAll({
        where: {
            productId: product.id
        }
    })

    const productJSON = product.toJSON()
    productJSON.Reviews = reviews

    res.json(productJSON)
})

module.exports = router
