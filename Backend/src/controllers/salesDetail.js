const db = require('../models/index')

// CRUD
const SalesDetail = db['SalesDetail']

const getSalesDetails = (req, res) => {
    SalesDetail.findAll()
                .then(salesDetail  => {
                    res.status(200).json({salesDetail: salesDetail})
                })
                .catch(err => console.log(err))
}

const getOneSalesDetail = (req, res) => {
    const salesDetailID = req.params.salesDetailID

    SalesDetail.findByPk(salesDetailID)
                .then(salesDetail => {
                    if(!salesDetail) {
                        return res.status(404).json({message: 'SalesDetail not found'})
                    }

                    res.status(200).json({salesDetail: salesDetail})
                })
                .catch(err => console.log(err))
}

const createSalesDetail = (req, res) => {
    const saleID = req.body.saleID
    const productID = req.body.productID
    const quantity = req.body.quantity

    SalesDetail.create({
                saleID: saleID,
                productID: productID,
                quantity: quantity
            })
            .then(result => {
                console.log('Created SalesDetail')
                res.status(201).json({
                    message: 'SalesDetail created successfully',
                    salesDetail: result
                })
            })
            .catch(err => console.log(err))
}

const updateSalesDetail = (req, res) => {
    const saleDetailID = req.params.salesDetailID
    const updateSaleID = req.body.saleID
    const updateProductID = req.body.productID
    const updateQuantity = req.body.quantity

    SalesDetail.findByPk(saleDetailID)
        .then(salesDetail => {
            if (!salesDetail) {
                return res.status(404).json({message: 'SalesDetail not found'})
            }

            let newValues = {
                saleID: updateSaleID,
                productID: updateProductID,
                quantity: updateQuantity
            }

            salesDetail.update(newValues)
                    .then(res.status(200).json({message: 'SalesDetail updated successfully'}))
        })
        .catch((err) => console.log(err))
}

const deleteSalesDetail = (req, res) => {
    const salesDetailID = req.params.salesDetailID

    SalesDetail.findByPk(salesDetailID)
            .then(salesDetail => {
                if (!salesDetail) {
                    return res.status(404).json({message: 'SalesDetail not found'})
                }

                SalesDetail.destroy({
                    where: {
                        id: salesDetailID
                    }
                })
                .then(res.status(200).json({message: 'SalesDetail delete successfully'}))
            })
            .catch((err) => console.log(err))
}

module.exports = { getSalesDetails, getOneSalesDetail, createSalesDetail, updateSalesDetail, deleteSalesDetail }