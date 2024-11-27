// index.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Définir le répertoire public pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Route pour servir le fichier index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Route pour envoyer les variables d'environnement au client
app.get('/env', (req, res) => {
    res.json({
        MOVIE_DB_API_KEY: process.env.MOVIE_DB_API_KEY
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
