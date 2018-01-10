function navigated() {
  var normalizedHash = window.location.hash.replace(/^#\/?|\/$/g, '');
  console.log('navigated normalizedHash',normalizedHash)
  if (normalizedHash === '') {
    // Redirect for default route
    startNavigating('/contacts');
   // if (normalizedHash == 'some-route') {
      // window.location.replace(
      //   window.location.pathname + window.location.search + '#/another-route'
      // );
    }
  else {
      // Otherwise update our application state
     
      setState({
        location: normalizedHash.split('/'), 
        transitioning: false
      });
  }
    // setState({  
    //     location: window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
    // });
}

function startNavigating(newURI) {
  var currentURI = window.location.hash.substr(1);
  console.log('startnavigating() currenturi ',currentURI, ' newuri ',newURI)
    if (currentURI != newURI) {
      setState({transitioning: true});
      console.log('startnavigating() ')
      window.location.replace(
        window.location.pathname + window.location.search + '#' + newURI
      );
      }
  // window.location.replace(
  //   window.location.pathname + window.location.search + '#' + hash
  // );
}
    /* function navigated() {
      // Choose which component to render based on browser URL
      var component = window.location.hash == "#/"
        ? React.createElement('div', {}, "Index Page")
        : React.createElement('div', {}, "Not Found")

      // Render the new component to the page's #react-app element
      ReactDOM.render(
        component,
        document.getElementById('react-app')
      );
    }*/
        