const db = require('../models/index')

// CRUD
const Sale = db['Sales']

const getSales = (req, res) => {
    Sale.findAll()
            .then(sales  => {
                res.status(200).json({sales: sales})
            })
            .catch(err => console.log(err))
}

const getOneSale = (req, res) => {
    const saleID = req.params.saleID

    Sale.findByPk(saleID)
            .then(sale => {
                if(!sale) {
                    return res.status(404).json({message: 'Sale not found'})
                }

                res.status(200).json({sale: sale})
            })
            .catch(err => console.log(err))
}

const createSale = (req, res) => {
    const saleSalesDate = req.body.salesDate
    const saleCustomerID = req.body.customerID
    const saleSalesDescription = req.body.salesDescription
    const saleTotal = req.body.total

    Sale.create({
                salesDate: saleSalesDate,
                customerID: saleCustomerID,
                salesDescription: saleSalesDescription,
                total: saleTotal
            })
            .then(result => {
                console.log('Created Sale')
                res.status(201).json({
                    message: 'Sale created successfully',
                    sale: result
                })
            })
            .catch(err => console.log(err))
}

const updateSale = (req, res) => {
    const saleID = req.params.saleID
    const saleUpdateSalesDate = req.body.salesDate
    const saleUpdateCustomerID = req.body.customerID
    const saleUpdateSalesDescription = req.body.salesDescription
    const saleUpdateTotal = req.body.total

    Sale.findByPk(saleID)
        .then(sale => {
            if (!sale) {
                return res.status(404).json({message: 'Sale not found'})
            }

            let newValues = {
                salesDate: saleUpdateSalesDate,
                customerID: saleUpdateCustomerID,
                salesDescription: saleUpdateSalesDescription,
                total: saleUpdateTotal
            }

            sale.update(newValues)
                    .then(res.status(200).json({message: 'Sale updated successfully'}))
        })
        .catch((err) => console.log(err))
}

const deleteSale = (req, res) => {
    const saleID = req.params.saleID

    Sale.findByPk(saleID)
            .then(sale => {
                if (!sale) {
                    return res.status(404).json({message: 'Sale not found'})
                }

                Sale.destroy({
                    where: {
                        id: saleID
                    }
                })
                .then(res.status(200).json({message: 'Sale delete successfully'}))
            })
            .catch((err) => console.log(err))
}

module.exports = { getSales, getOneSale, createSale, updateSale, deleteSale }