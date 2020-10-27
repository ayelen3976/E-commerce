const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const userRouter = require('./user.js');
const orderRouter = require('./order');
const authRouter = require('./auth')


const router = Router();

router.use('/products/category', categoryRouter);
router.use('/products', productRouter);
router.use('/user',userRouter);
router.use('/order', orderRouter);
router.use('/auth' , authRouter);



module.exports = router;
