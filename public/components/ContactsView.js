//contact View Component
var ContactsView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onChangeContact: React.PropTypes.func.isRequired,
        onSubmitContact: React.PropTypes.func.isRequired,
    },

    render: function() {
        var contactItemElements = this.props.contacts
        .filter(function(contact) { return contact.email })
        .map(function(contact) { return  React.createElement(ContactItem, Object.assign({}, contact, {id: contact.key})); });
    //          React.createElement(ContactItem, contact) })

        return (
        React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        // React.createElement(ContactForm, {contact: this.props.newContact})
        // React.createElement(ContactForm, {
        //                                   value: this.props.newContact,
        //                                   onChange: function(contact) { console.log(contact) },
        // }) 
        React.createElement(ContactForm, {
                                            value: this.props.newContact,
                                            onChange: this.props.onChangeContact,
                                            onSubmit: this.props.onSubmitContact,
                            })                    
        )
        )
    },
})
