const mongoose = require('mongoose');
const mongoosepaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name:{
       type: String,
       require:true
    },
    description:String,

    category:String,
    
    price:{
        type:String,
        require:true
    },
    thumbnail:String,
},{
    toJSON:{
        virtuals:true,
    }
});

ProductSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})
ProductSchema.plugin(mongoosepaginate);

module.exports = mongoose.model('Product',ProductSchema);