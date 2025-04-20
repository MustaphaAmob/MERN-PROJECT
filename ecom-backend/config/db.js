const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        console.log(uri)
        
        // Vérifier si MONGO_URI est bien défini
        
        if (!uri) {
            throw new Error("MONGO_URI n'est pas défini dans le fichier .env !");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connecté !!');
    } catch (err) {
        console.error('Erreur de connexion à la BD :', err);
        process.exit(1); // Quitte le processus en cas d'erreur
    }
};

module.exports = connectDB;
