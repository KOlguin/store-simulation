const inventoryController = require('../controllers/inventory')

const express = require('express')

const router = express.Router()

router.get('/', inventoryController.getInventory)
router.get('/:inventoryID', inventoryController.getOneInventory)
router.post('/', inventoryController.createInventory)
router.put('/:inventoryID', inventoryController.updateInventory)
router.delete('/:inventoryID', inventoryController.deleteInventory)

module.exports = router