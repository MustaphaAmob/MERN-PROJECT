const Product = require('../model/Product')
const Order = require('../model/Order')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if (!products) {
            return res.status(404).json({ message: 'Aucun produit trouvé' });
        }
        res.json(products)
        console.log('hello !!')
    } catch(err) {
        res.status(500).json({ message: 'Erreur serveur' })
    }
} 

const getProductById = async (req, res) => {
    try {
        
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

const postOrder = async (req, res) => {
    try {
        const { firstName, lastName, email, address, address2, cart, total } = req.body;
    
        const order = new Order({
          firstName,
          lastName,
          email,
          address,
          address2,
          cart,
          total,
        });
    
        await order.save();
        console.log('Order saved !!')
        res.status(201).json({ message: "Order saved successfully!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving order" });
      }
}

module.exports = { getProducts, getProductById, postOrder }