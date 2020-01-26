require('dotenv').config()
const sendmail = require('../services/email-service')
const Booking = require('../models/Booking');

module.exports = {

       async sendmail(req, res){
           try {
            const {email, name, ammount, product, price} = req.body;   

            const booking = await Booking
            .create({email,name,ammount,product,price})

            sendmail.sendMail({
                from:process.env.USER_EMAIL,
                to:process.env.USER_EMAIL,
                subject:'Minions Store',
                template:'booking/bookingEmail',
                context:{email,name,ammount,product,price},
            })
                return res.status(200).json(booking);
               
           } catch (error) {
               console.log(error)
               return res.status(400).json(error.message)
           }
    
        }    
}
/*
sendMail.sendMail({
    from:process.env.USER_EMAIL,
    to:email,
    subject:'Minions Store',
    template:'booking/bookingEmail',
    context:{email,name,ammount,product,price},

    },function (error,data) {
if(error){
     return res.status(400).json({error:'Cannot send email'});
}else{
    return res.status(200).json('Email enviado')
}
})
*/