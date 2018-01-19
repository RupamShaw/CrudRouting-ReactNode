import React  from 'react';
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
// contact list component
var ContactItem = React.createClass({
    propTypes: {
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      email: React.PropTypes.string.isRequired,
      description: React.PropTypes.string,
    },

  render: function() {
    // I wrap mult-line return statements in parentheses to avoid the
    // inevitable bugs caused by forgetting that JavaScript will throw away
    // the final lines when possible. The parentheses are not strictly
    // necessary.
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('a', {href: "#/contacts/"+this.props.id, className: 'ContactItem-name'}, this.props.name),
       // React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div',  {className: 'ContactItem-description'}, this.props.description)
      )
    )
  },
})

export default ContactItem