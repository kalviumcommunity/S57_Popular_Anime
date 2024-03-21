const mongoose = require('mongoose')

const data = new mongoose.Schema({
    animeName: {
         type: String,
         required: true
    },
    authorName: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    }, 
    character: {
        type: String,
        required: true
    }
})

const dataSet = mongoose.model('dataSet' ,data);
module.exports=dataSet;