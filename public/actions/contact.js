//var Contact = require('../models/contact-model')
function updateNewContact(contact) {
  setState({ newContactForm: contact });
}

function _addValidationToContact(contact) {
  if (!contact.name) {
    contact.errors.name = ["Please enter your new contact's name"]
  }
  if (!/.+@.+\..+/.test(contact.email)) {
    contact.errors.email = ["Please enter your new contact's email"]
  }
}

function submitNewContact() {
  var contact = Object.assign({}, state.newContactForm, { key: state.contacts.length + 1+"", errors: {} });
  _addValidationToContact(contact);
  console.log("tosave contacts name", contact.name,' objkeycontacterr lntg ',Object.keys(contact.errors).length,' contact.errors ',contact.errors )
 
  if (Object.keys(contact.errors).length === 0){
  $(function() {
    var d ={contact: contact}
    console.log('new contact from react ',d);
       $.post('/newcontact?' + $.param(d), function(res) {
         console.log('res got from server ',res)
         setState({
              newContactForm: Object.assign({}, CONTACT_TEMPLATE),
              contacts: state.contacts.slice(0).concat(contact),
          });
      });
  })
  //if (contact.name && contact.email) {
  }else {
     console.log('in error length',contact.errors)
      setState({ newContactForm: contact });
  }
}

function updateContactForm(contact) {
  var update = {};
  update[contact.key] = contact;
  var contactForms = Object.assign(state.contactForms, update);

  setState({ contactForms: contactForms });
}


function submitContactForm() {
  // window.location.replace(
  //     window.location.pathname + window.location.search + '#/contacts'
  //   );
  var key = state.location[1];
  var contactForm = state.contactForms[key];

  if (!contactForm) {
    startNavigating('/contacts');
  }
  else {
    var contact = Object.assign({}, contactForm, { errors: {} });

    _addValidationToContact(contact);

    var contactForms = Object.assign({}, state.contactForms);
    var update = { contactForms: contactForms };

    if (Object.keys(contact.errors).length === 0) {
      $(function() {
        var d ={contact: contactForms[key]}
        console.log('update contact from react ',d);
           $.post('/updatecontact?' + $.param(d), function(res) {
             console.log('res got from server ',res)
             delete contactForms[key];
             update.contacts = state.contacts.slice(0).map(function (x) {
               return x.key == key ? contact : x
             });
             console.log('key ',key)
             startNavigating('/contacts');
             setState(update);
            });
      })
    }
    else {
      contactForms[key] = contact;
    console.log('contactforms[key]', contactForms[key])
    setState(update); 
  }
    console.log('update', update )
   
  }
}
