const db = require('../models/index')

// CRUD

const Customer = db['Customer']

const getCustomers = (req, res) => {
    Customer.findAll()
            .then(customers  => {
                res.status(200).json({customers: customers})
            })
            .catch(err => console.log(err))
}

const getOneCustomer = (req, res) => {
    const customerID = req.params.customerID

    Customer.findByPk(customerID)
            .then(customer => {
                if(!customer) {
                    return res.status(404).json({message: 'Customer not found'})
                }

                res.status(200).json({customer: customer})
            })
            .catch(err => console.log(err))
}

const createCustomer = (req, res) => {
    console.log(req.body)
    const customerName = req.body.name
    const customerLastName = req.body.lastName
    const customerAddress = req.body.address
    const customerPhone = req.body.phoneNumber

    Customer.create({
                name: customerName,
                lastName: customerLastName,
                address: customerAddress,
                phoneNumber: customerPhone
            })
            .then(result => {
                console.log('Created Customer')
                res.status(201).json({
                    message: 'Customer created successfully',
                    customer: result
                })
            })
            .catch(err => console.log(err))
}

const updateCustomer = (req, res) => {
    const customerID = req.params.customerID
    const customerUpdateName = req.body.name
    const customerUpdateLastName = req.body.lastName
    const customerUpdateAddress = req.body.address
    const customerUpdatePhone = req.body.phoneNumber

    Customer.findByPk(customerID)
            .then(customer => {
                if (!customer) {
                    return res.status(404).json({message: 'Customer not found'})
                }

                // customer.name = customerUpdateName
                // customer.lastName = customerUpdateLastName
                // customer.address = customerUpdateAddress
                // customer.phoneNumber = customerUpdatePhone

                // return customer.save()
                let newValues = {
                    name: customerUpdateName,
                    lastName: customerUpdateLastName,
                    address: customerUpdateAddress,
                    phoneNumber: customerUpdatePhone
                }

                customer.update(newValues)
                        .then(res.status(200).json({message: 'Customer updated successfully'}))
            })
            .catch((err) => console.log(err))
}

const deleteCustomer = (req, res) => {
    const customerID = req.params.customerID

    Customer.findByPk(customerID)
            .then(customer => {
                if (!customer) {
                    return res.status(404).json({message: 'Customer not found'})
                }

                Customer.destroy({
                    where: {
                        id: customerID
                    }
                })
                .then(res.status(200).json({message: 'Customer delete successfully'}))
            })
            .catch((err) => console.log(err))
}

module.exports = { getCustomers, getOneCustomer, createCustomer, updateCustomer, deleteCustomer }