const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ProductController = require('./controllers/ProductsController');
const UserController = require('./controllers/UserController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/products',upload.single('thumbnail'),ProductController.store);
routes.get('/products',ProductController.index);
routes.get('/product/:id',ProductController.show);

routes.get('/users',UserController.index);
routes.post('/users',UserController.store);

routes.post('/sendMail',BookingController.sendmail);

module.exports = routes;