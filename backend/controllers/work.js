const Work = require('../models/work');
//controlleur pour récupérer tous les travaux
exports.getAllWorks= (req,res,next)=>{
    Work.find()
    .then((works)=>res.status(200).json(works))
    .catch(error=> res.status(400).json({error}))
};
//controlleur pour récupérer un projet en fonction de l'id
exports.getOneWork=(req,res,next)=>{
    Work.findOne({id: req.params.id})
    .then((work)=>res.status(200).json(work))
    .catch(err=>res.status(400).json({err}));
};