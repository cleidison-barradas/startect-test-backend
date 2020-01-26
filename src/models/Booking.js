const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    ammount:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    product:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('Booking',BookingSchema);