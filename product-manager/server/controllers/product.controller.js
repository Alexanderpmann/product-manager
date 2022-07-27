// we need our model to work with
const Product = require("../models/product.model");

// CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "Something went wrong when adding a Product to the database!!", err: err}))
}

// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Something went wrong when grabbing all Products!!", err: err}))
}

// READ ONE
module.exports.findOneProduct = (req, res) => {
    Product.find({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong when grabbing one Product!!", err: err}))
}

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Something went wrong when updating a Product!!", err: err}))
}

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(res.json({message: "Product was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when deleting a Product from the database!!", err: err}))
}