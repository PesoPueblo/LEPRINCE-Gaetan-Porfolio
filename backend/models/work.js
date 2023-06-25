const mongoose = require('mongoose');

//schéma d'un projet

const workSchema = mongoose.Schema({
        id:{type:Number, require:true},
        titre: {type:String, require:true},
        année: {type:Number, require:true},
        context: {type:String, require:true},
        technologies:{type:String, require:true},
        lien:{type:String, require:true},
        images:{type:String, require:true}
});

//export du schema
module.exports=mongoose.model('work',workSchema);