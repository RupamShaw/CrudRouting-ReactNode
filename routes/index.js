var express = require('express');
var mongoose = require('mongoose')
mongoose.connect("mongodb://contactuser:contactUser@ds255767.mlab.com:55767/contact", { useMongoClient: true }, () =>{
  console.log('connected to mongodb')
})
var Schema = mongoose.Schema

//create contact schema and model
var contactSchema = new Schema({
name: {
    type:String,
    required:[true,'Name field is required']
},
email:{
    type:String
},
description  :{
    type:String
}

}) 

var Contact = mongoose.model('contactpers',contactSchema)

var router =express.Router()

router.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

router.post('/updatecontact',function(request,response){
  console.log("update req query ********")
  console.log(request.query)
  console.log("update req query contact********")
  console.log(request.query.contact)  
  // var updcontact = new Contact({
  //   name:request.query.contact.name,
  //   email:request.query.contact.email,
  //   description:request.query.contact.description
  // })
  Contact.findOneAndUpdate({email:request.query.contact.email},{
    name:request.query.contact.name,
    email:request.query.contact.email,
    description:request.query.contact.description
  }, function(err, contact) {
    console.log('after find contact',contact._id)
 /*   if(!err) {
      contact.name = request.query.contact.name || contact.name;
      co.description = req.body.description || todo.description;
     

      new Contact({
        name:request.query.contact.name,
        email:request.query.contact.email,
        description:request.query.contact.description
      }).save((err,res) => 
      {   if (err) {
          console.log('in errrrrrrrrrrrrrr',err);
          throw err;
        } else {
          console.log("data created ");//not logging //i think cause err is json thats why it// yes u are s not right
        }
      }).then((res) => 
      { console.log('in result',res)
      });
        };*/
    } 
   
  )
//});
  // new Contact({
  //   name:request.query.contact.name,
  //   email:request.query.contact.email,
  //   description:request.query.contact.description
  // })
  // .save((err,res) => 
  // {   if (err) {
  //     console.log('in errrrrrrrrrrrrrr',err);
  //     throw err;
  //   } else {
  //     console.log("data created ");//not logging //i think cause err is json thats why it// yes u are s not right
  //   }
  // }).then((res) => 
  // { console.log('in result',res)
  // });
   response.end('contact updated')
})
router.post('/newcontact',function(request,response){
  console.log("req query ********")
  console.log(request.query)
  console.log("req query contact********")
  console.log(request.query.contact)  
  new Contact({
    name:request.query.contact.name,
    email:request.query.contact.email,
    description:request.query.contact.description
  }).save((err,res) => 
  {   if (err) {
      console.log('in errrrrrrrrrrrrrr',err);
      throw err;
    } else {
      console.log("data created ");//not logging //i think cause err is json thats why it// yes u are s not right
    }
  }).then((res) => 
  { console.log('in result',res)
  });
  response.end('contact added')
})
  module.exports = router;