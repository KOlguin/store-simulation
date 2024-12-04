const productController = require('../controllers/products')

const express = require('express')

const router = express.Router()

router.get('/', productController.getProducts)
router.get('/:productID', productController.getOneProduct)
router.post('/', productController.createProduct)
router.put('/:productID', productController.updateProduct)
router.delete('/:productID', productController.deleteProduct)

module.exports = router