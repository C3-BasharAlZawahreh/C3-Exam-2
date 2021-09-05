// db
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Exam2').then(()=>{
    console.log('Connected to db');
})