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
var state = {
    transitioning: false,
    location: null,
    contacts: [
        { key: "1", name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: "2", name: "Jim", email: "jim@example.com" },
    ],
    contactForms: {},
    newContactForm: Object.assign({},CONTACT_TEMPLATE),
};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
   console.log('in setstate changes',changes)
    Object.assign(state, changes);
    console.log('in setstate state',state)
   if (!state.transitioning) {
        ReactDOM.render(  
            React.createElement(Application, state),
            document.getElementById('react-app')
        );
    }
}
/*
// Set initial data
setState({
    contacts: [
        { key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn" },
        { key: 2, name: "Jim", email: "jim@example.com" },
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
    location: window.location.hash
});*/


// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);
// Start the app
navigated();
