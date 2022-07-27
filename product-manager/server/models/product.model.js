const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of product is required!"]
    },
    photo: {
        type: String,
        required: [true, "photo of the product is required!"]
    },
    price: {
        type: Number,
        required: [true, "The product must have a price!"],
        min: [1, "The product must be at least 1 dollar!!"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
