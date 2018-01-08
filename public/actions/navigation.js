function navigated() {
    setState({  
        location: window.location.hash.replace(/^#\/?|\/$/g, '').split('/')
    });
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
        