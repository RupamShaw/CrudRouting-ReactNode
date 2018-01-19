import React  from 'react';
import ContactForm from './ContactForm'
import ContactItem from './ContactItem'
//import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
//contactaView Component
//var ContactsView = createReactClass({
var ContactsView = React.createClass({

  propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContactForm: React.PropTypes.object.isRequired,
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired,
    },

    render: function () {
      console.log('incontactsview render')
        /*   var contactItemElements = this.props.contacts
           .filter(function(contact) { return contact.email })
           .map(function(contact) { return  React.createElement(ContactItem, Object.assign({}, contact, {id: contact.key})); });
       */
        //          React.createElement(ContactItem, contact) })

        return (
            React.createElement('div', { className: 'ContactsView' },
                React.createElement('h1', { className: 'ContactsView-title' }, "Contacts"),
                React.createElement('ul', { className: 'ContactView-list' }, this.props.contacts.map(function (contact) {
                    return React.createElement(ContactItem, Object.assign(contact, { id: contact.key }))
                })),
                // React.createElement(ContactForm, {contact: this.props.newContact})
                // React.createElement(ContactForm, {
                //                                   value: this.props.newContact,
                //                                   onChange: function(contact) { console.log(contact) },
                // }) 
                React.createElement(ContactForm, {
                    value: this.props.newContactForm,
                    onChange: this.props.onChangeContact,
                    onSubmit: this.props.onSubmitContact,
                })
            )
        )
    },
})
export default ContactsView