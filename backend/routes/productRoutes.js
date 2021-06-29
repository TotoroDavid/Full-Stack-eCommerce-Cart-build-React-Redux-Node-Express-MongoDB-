const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById
} = require('../controller/productController')

//@desc GET all the products from db
//@route GET/api/products
//@access public
router.get('/', getAllProducts)

//@desc GET a products by id from DB
//@route GET/api/products/:id
//@access public
router.get('/:id', getProductById)

module.exports = router