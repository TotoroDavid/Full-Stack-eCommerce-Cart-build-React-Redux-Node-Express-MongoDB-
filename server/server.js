require('dotenv').config()

const express = require('express')
/** MongoDB connection */
const connectDB = require('./config/db')
/** routes */
const productRoutes = require('./routes/productRoutes')

connectDB()

const app = express()

/** middleware */
app.use(express.json())

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))