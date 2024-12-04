const db = require('../models/index')

// CRUD
const Inventory = db['Inventory']

const getInventory = (req, res) => {
    Inventory.findAll()
                .then(inventory  => {
                    res.status(200).json({inventory: inventory})
                })
                .catch(err => console.log(err))
}

const getOneInventory = (req, res) => {
    const inventoryID = req.params.inventoryID

    Inventory.findByPk(inventoryID)
            .then(inventory => {
                if(!inventory) {
                    return res.status(404).json({message: 'Inventory not found'})
                }

                res.status(200).json({inventory: inventory})
            })
            .catch(err => console.log(err))
}

const createInventory = (req, res) => {
    const availableQuantity = req.body.availableQuantity
    const maximumStock = req.body.maximumStock
    const minimumStock = req.body.minimumStock
    const productID = req.body.productID
    const updateDate = req.body.updateDate

    Inventory.create({
                availableQuantity: availableQuantity,
                maximumStock: maximumStock,
                minimumStock: minimumStock,
                productID: productID,
                updateDate: updateDate
            })
            .then(result => {
                console.log('Created Inventory')
                res.status(201).json({
                    message: 'Inventory created successfully',
                    inventory: result
                })
            })
            .catch(err => console.log(err))
}

const updateInventory = (req, res) => {
    const inventoryID = req.params.inventoryID
    const updateAvailableQuantity = req.body.availableQuantity
    const updateMaximumStock = req.body.maximumStock
    const updateMinimumStock = req.body.minimumStock
    const updateProductID = req.body.productID
    const updateUpdateDate = req.body.updateDate

    Inventory.findByPk(inventoryID)
        .then(inventory => {
            if (!inventory) {
                return res.status(404).json({message: 'Inventory not found'})
            }

            let newValues = {
                availableQuantity: updateAvailableQuantity,
                maximumStock: updateMaximumStock,
                minimumStock: updateMinimumStock,
                productID: updateProductID,
                updateDate: updateUpdateDate
            }

            inventory.update(newValues)
                    .then(res.status(200).json({message: 'Inventory updated successfully'}))
        })
        .catch((err) => console.log(err))
}

const deleteInventory = (req, res) => {
    const inventoryID = req.params.inventoryID

    Inventory.findByPk(inventoryID)
            .then(inventory => {
                if (!inventory) {
                    return res.status(404).json({message: 'Inventory not found'})
                }

                Inventory.destroy({
                    where: {
                        id: inventoryID
                    }
                })
                .then(res.status(200).json({message: 'Inventory delete successfully'}))
            })
            .catch((err) => console.log(err))
}

module.exports = { getInventory, getOneInventory, createInventory, updateInventory, deleteInventory }