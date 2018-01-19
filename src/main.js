import {navigated} from './actions/navigation'
// import React from "react"
// import ReactDOM from 'react-dom'
// import Application from './components/Application'
// var CONTACT_TEMPLATE = {
//      name: "", email: "", description: "", errors: null 
//     };
// // The app's complete current state
// var state = {
//     transitioning: false,
//     location: null,
//     contacts: [
      
//     ],
//     contactForms: {},
//     newContactForm: Object.assign({},CONTACT_TEMPLATE),
// };

// // Make the given changes to the state and perform any required housekeeping
// const setState = (changes) => {
//    console.log('in setstate changes',changes)
//     Object.assign(state, changes);
//     console.log('in setstate state',state)
//    if (!state.transitioning) {
//         ReactDOM.render(  
//             React.createElement(Application, state),
//             document.getElementById('react-app')
//         );
//     }
// }
// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);
// Start the app
navigated();

// export {
//   setState,
//   state,
//   CONTACT_TEMPLATE,
// }

