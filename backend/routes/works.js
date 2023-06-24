const express = require('express');

const WorkCtrl = require('../controllers/work');

const router = express.Router();

//création de route API
router.get('/',WorkCtrl.getAllWorks);
router.get('/:id',WorkCtrl.getOneWork);
module.exports=router;