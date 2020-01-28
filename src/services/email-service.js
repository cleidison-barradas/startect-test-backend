const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config()

let transporter = nodemailer.createTransport({
  service:process.env.SERVER,
  host:process.env.HOST,
  auth:{
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD,
  }
})
transporter.use('compile',hbs({
  viewEngine:'handlebars',
  viewPath: path.resolve('./src/modules/mail/'),
  extName:'.html',
}))
 module.exports = transporter;
