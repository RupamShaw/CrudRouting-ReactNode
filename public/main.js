/*
    * Constants
    */

/*
     * Data
     */

    /*  var contacts = [
      {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
      {key: 2, name: "Jim", email: "jim@example.com"},
      {key: 3, name: "Joe"},
    ]

    var newContact = {name: "", email: "", description: ""}
    */
var CONTACT_TEMPLATE = {
     name: "", email: "", description: "", errors: null 
    };
// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
    var component;
    Object.assign(state, changes);
    switch (state.location[0]) {
        case 'contacts':
            if (state.location[1]) {
                component = React.createElement(ContactView, Object.assign({}, state, { id: state.location[1] }));
            }
            else {
                component = React.createElement(ContactsView, Object.assign({}, state, {
                    onChangeContact: updateNewContact,
                    onSubmitContact: submitNewContact,
                }));
            }
            break;
        // switch (state.location) {
        //   case '#/contacts':
        //     component = React.createElement(ContactsView, Object.assign({}, state, {
        //         onNewContactChange: updateNewContact,
        //         onNewContactSubmit: submitNewContact,
        //       }));
        //     break;
        default:
            component = React.createElement('div', {},
                React.createElement('h1', {}, "Not Found"),
                React.createElement('a', { href: '#/contacts' }, "Contacts")
            );
    }
    ReactDOM.render(component, document.getElementById('react-app'));
}

// Set initial data
setState({
    contacts: [
        { key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: 2, name: "Jim", email: "jim@example.com" },
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
    location: window.location.hash
});


// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);

// Start the app
navigated();
