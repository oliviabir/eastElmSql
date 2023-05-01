const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productsRouter = require('./products.js')
const reviewsRouter = require('./reviews.js')
const ordersRouter = require('./orders.js')
const orderProductsRouter = require('./orderProducts.js')

const { restoreUser } = require("../../utils/auth.js");

router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter)
router.use('/reviews', reviewsRouter)
router.use('/orders', ordersRouter)
router.use('/orderProducts', orderProductsRouter)


module.exports = router;
