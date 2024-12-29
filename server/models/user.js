const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{type:String,require:true},
    imgpath:{type:String,require:true},
    date:{type:Date}
})

//create model
const userdt = new mongoose.model("img",user)
module.exports = userdt; 