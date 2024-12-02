const salesController = require('../controllers/sales')

const express = require('express')

const router = express.Router()

router.get('/', salesController.getSales)
router.get('/:saleID', salesController.getOneSale)
router.post('/', salesController.createSale)
router.put('/:saleID', salesController.updateSale)
router.delete('/:saleID', salesController.deleteSale)

module.exports = router