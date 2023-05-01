const express = require('express')
const router = express.Router()

const { requireAuth } = require('../../utils/auth')
const { OrderProducts } = require('../../db/models')

//Get orderProduct records ==========================>
router.get('/', requireAuth, async (req, res) => {
    const records = await OrderProducts.findAll
})


module.exports = router
