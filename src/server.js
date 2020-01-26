require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');
const app = express();

mongoose.connect(process.env.SERVER_DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);
app.listen(process.env.PORT || 3333);
