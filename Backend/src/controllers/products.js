const db = require('../models/index')

// CRUD
const Product = db['Products']

const getProducts = (req, res) => {
    Product.findAll()
            .then(products  => {
                res.status(200).json({products: products})
            })
            .catch(err => console.log(err))
}

const getOneProduct = (req, res) => {
    const productID = req.params.productID

    Product.findByPk(productID)
            .then(product => {
                if(!product) {
                    return res.status(404).json({message: 'Product not found'})
                }

                res.status(200).json({product: product})
            })
            .catch(err => console.log(err))
}

const createProduct = (req, res) => {
    const productSKU = req.body.SKU
    const productName = req.body.name
    const productPrice = req.body.price
    const productBrand = req.body.brand
    const productDescription = req.body.description

    Product.create({
                SKU: productSKU,
                Name: productName,
                price: productPrice,
                brand: productBrand,
                description: productDescription
            })
            .then(result => {
                console.log('Created Product')
                res.status(201).json({
                    message: 'Product created successfully',
                    product: result
                })
            })
            .catch(err => console.log(err))
}

const updateProduct = (req, res) => {
    const productID = req.params.productID
    const productUpdateSKU = req.body.SKU
    const productUpdateName = req.body.name
    const productUpdatePrice = req.body.price
    const productUpdateBrand = req.body.brand
    const productUpdateDescription = req.body.description

    Product.findByPk(productID)
            .then(product => {
                if (!product) {
                    return res.status(404).json({message: 'Product not found'})
                }

                let newValues = {
                    SKU: productUpdateSKU,
                    Name: productUpdateName,
                    price: productUpdatePrice,
                    brand: productUpdateBrand,
                    description: productUpdateDescription
                }

                product.update(newValues)
                        .then(res.status(200).json({message: 'Product updated successfully'}))
            })
            .catch((err) => console.log(err))
}

const deleteProduct = (req, res) => {
    const productID = req.params.productID

    Product.findByPk(productID)
            .then(product => {
                if (!product) {
                    return res.status(404).json({message: 'Product not found'})
                }

                Product.destroy({
                    where: {
                        id: productID
                    }
                })
                .then(res.status(200).json({message: 'Product delete successfully'}))
            })
            .catch((err) => console.log(err))
}

module.exports = { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct }