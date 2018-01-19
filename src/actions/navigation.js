import {setState} from './statemgmt';

function navigated() {
  var normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '');
  console.log('navigated normalizedHash',normalizedHash)
  if (normalizedHash === '') {
    // Redirect for default route
    startNavigating('/contacts');
  
    }
  else {
      // Otherwise update our application state
     
      setState({
        location: normalizedHash.split('/'), 
        transitioning: false
      });
  }
    
}

function startNavigating(newURI) {
  var currentURI = window.location.hash.substr(1);
  console.log('startnavigating() currenturi  is ',currentURI, '  newuri ',newURI)
    if (currentURI != newURI) {
      setState({transitioning: true}); 
      console.log('startnavigating() ')
      window.location.replace(
        window.location.pathname + window.location.search + '#' + newURI
      );
      }
 
}
export  {navigated,startNavigating}