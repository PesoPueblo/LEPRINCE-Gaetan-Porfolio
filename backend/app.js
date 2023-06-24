const express =require('express');
const mongoose= require('mongoose');
const path = require ('path');
require('dotenv').config();

//importation des routes API
const WorksRoutes = require('./routes/works')

//connexion à MongoDB
mongoose.connect(process.env.MONGODB_PATH,
    {useNewUrlParser: true,
     useUnifiedTopology: true
    })
    .then(()=>console.log('connexion réussi à MongoDB '))
    .catch(()=>console.log('Echec de la connexion à MongoDB'));

const app= express();

app.use(express.json());

//gestion des CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', process.env.MONGODB_PATH);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
       'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//appel de l'API
app.use('/api/works', WorksRoutes);

app.use('/image', express.static(path.join(__dirname, 'image')));

module.exports = app;