const Product = require('../models/Products');

module.exports = {
    async index(req,res){
        const { page = 1 }  = req.query;
        const products = await Product.paginate({},{ page , limit:4 });

        return res.json(products);
    },
    async show(req,res){
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },
    async store(req,res){
        try{
        const {filename} = req.file;
        const { name, description, category, price, } = req.body;

        const products = await Product.create({
            name,
            description,
            category,
            price,
            thumbnail:filename
        })
        return res.json(products);
        }catch(err){
            return res.status(400).json({err:err.message})
        }
    }
}
