/**
 * transfer the local data to the mongoAtlas
 */

require('dotenv').config()

const productData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/product')

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({})

        /** insert the local data */
        await Product.insertMany(productData)
        console.log('Data Import Success')

        process.exit()
    } catch (error) {
        console.log('Error with data import ')
        process.exit(1)
    }
}

importData()
/** go to the terminal and eject the command for import it  */