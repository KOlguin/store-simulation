const express = require('express')
const router = express.Router()

const customerRoutes = require('./customer')
const productRoutes = require('./product')
const salesRoutes = require('./sales')
const salesDetailsRoutes = require('./salesDetails')
const inventoryRoutes = require('./inventory')

router.use('/customer', customerRoutes)
router.use('/product', productRoutes)
router.use('/sale', salesRoutes)
router.use('/salesDetail', salesDetailsRoutes)
router.use('/inventory', inventoryRoutes)

module.exports = router