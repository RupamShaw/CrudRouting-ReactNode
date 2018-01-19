import React  from 'react';
import ContactForm from './ContactForm'
//import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
var ContactView = React.createClass({
    propTypes: {
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired,

        contacts: React.PropTypes.array.isRequired,
        contactForms: React.PropTypes.object.isRequired,
        id: React.PropTypes.string.isRequired,
    },

    render: function () {
        var key = this.props.id;
        var contactForm = 
        this.props.contactForms[key] ||
        this.props.contacts.filter(function (contact) { return contact.key == key })[0];

        return (
            !contactForm
                ? React.createElement('h1', {}, "Not Found")
                : React.createElement('div', { className: 'ContactView' },
                    React.createElement('h1', { className: 'ContactView-title' }, "Edit Contact"),
                    React.createElement(ContactForm, {
                        value: contactForm,
                        onChange: this.props.onChangeContact,
                        onSubmit: this.props.onSubmitContact,
                    })
                )
        )
    },
});

export default ContactView