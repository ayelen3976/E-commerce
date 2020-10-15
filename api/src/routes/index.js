const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const userRouter = require('./user.js');
const orderRouter = require('./order');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products/category', categoryRouter);
router.use('/products', productRouter);
router.use('/user',userRouter);
router.use('/order', orderRouter);


module.exports = router;
