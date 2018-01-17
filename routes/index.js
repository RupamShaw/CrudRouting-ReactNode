var express = require('express');
var mongoose = require('mongoose')
mongoose.connect("mongodb://contactuser:contactUser@ds255767.mlab.com:55767/contact", { useMongoClient: true }, () => {
  console.log('connected to mongodb')
})
var Schema = mongoose.Schema

//create contact schema and model
var contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String
  },
  description: {
    type: String
  }

})

var Contact = mongoose.model('contactpers', contactSchema)
var router = express.Router()

router.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

router.get('/contacts', function (request, response) {
  console.log("in get contacts")
  Contact.find(function (err, contacts) {
    //console.log('in get list',contacts)
    console.log('before sending response json', contacts)
    var obj ={}
    response.json(contacts.map((x, v) => {
      
      obj = {
        key: v + 1 + "",
        name: x.name,
        email: x.email,
        description: x.description,
        objid: x._id + ""
      }
      console.log(obj)
      return obj
    }))
  })
})


router.post('/updatecontact', function (request, response) {
  console.log("update req query contact********",request.query.contact)
  Contact.findOneAndUpdate({ _id: request.query.contact.objid }, {
    name: request.query.contact.name,
    email: request.query.contact.email,
    description: request.query.contact.description
   }, {new: true}, function (err, result) {
    console.log('after find contact result is old data which was saved earlier for getting new set new true ', result)
    }
  )
  response.end('contact updated')
})
router.post('/newcontact', function (request, response) {
  console.log("req query contact********",request.query.contact)
  new Contact({
    name: request.query.contact.name,
    email: request.query.contact.email,
    description: request.query.contact.description
  }).save((err, res) => {
    if (err) {
      console.log('in errrrrrrrrrrrrrr', err);
      throw err;
    } else {
      console.log("data created ");
    }
  }).then((res) => {
    console.log('in result', res)
  });
  response.end('contact added')
})
module.exports = router;