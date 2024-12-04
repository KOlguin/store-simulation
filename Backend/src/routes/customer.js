const customersController = require('../controllers/customers')

const express = require('express')

const router = express.Router()

router.get('/', customersController.getCustomers)
router.get('/:customerID', customersController.getOneCustomer)
router.post('/', customersController.createCustomer)
router.put('/:customerID', customersController.updateCustomer)
router.delete('/:customerID', customersController.deleteCustomer)

module.exports = router