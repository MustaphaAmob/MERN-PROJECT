const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');  // Assure-toi du bon chemin
const path = require('path')

dotenv.config();
connectDB();

const app = express();

// Middleware pour gérer les requêtes JSON
app.use(express.json());  // Assure-toi que ceci est avant les routes

// Middleware CORS pour éviter des problèmes de CORS
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Utiliser les routes produits, cela doit être défini après app.use(express.json()) et app.use(cors())
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log('Le serveur est lancé !!!')
    console.log("MONGO_URI:", process.env.MONGO_URI);
})