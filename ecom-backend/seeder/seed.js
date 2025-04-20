const mongoose = require('mongoose')
const dotenv = require('dotenv');
const connectDB = require('../config/db')
const Product = require('../model/Product')
const Products = require('../data/Products')

dotenv.config()
connectDB()

const insertData = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(Products)
        console.log('Données insérées !!')
        process.exit()
    } catch(err) {
        console.error('Erreur : ', err.message)
        process.exit(1)
    }
}

insertData()

