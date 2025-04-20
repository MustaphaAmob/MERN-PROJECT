const express = require('express');
const router = express.Router();
const { getProducts, getProductById, postOrder } = require('../controllers/productController');

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/create', postOrder)


module.exports = router;