const salesDetailController = require('../controllers/salesDetail')

const express = require('express')

const router = express.Router()

router.get('/', salesDetailController.getSalesDetails)
router.get('/:salesDetailID', salesDetailController.getOneSalesDetail)
router.post('/', salesDetailController.createSalesDetail)
router.put('/:salesDetailID', salesDetailController.updateSalesDetail)
router.delete('/:salesDetailID', salesDetailController.deleteSalesDetail)

module.exports = router