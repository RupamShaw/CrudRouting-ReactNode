
var CONTACT_TEMPLATE = {
     name: "", email: "", description: "", errors: null 
    };
// The app's complete current state
var state = {
    transitioning: false,
    location: null,
    contacts: [
      
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
// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);
// Start the app
navigated();
