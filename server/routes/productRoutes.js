/**
 * middleware routes
 */

const express = require('express')
const router = express.Router()

const { getAllProducts, getProductById } = require('../controllers/productControllers')

/**
 * @desc get all products from db
 * @route Get /api/products
 * @access Public schema
 */
router.get('/', getAllProducts)

/**
 * @desc get a product from db
 * @route Get /api/products/:id
 * @access Public schema
 */
router.get('/:id', getProductById)

module.exports = router