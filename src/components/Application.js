import React  from 'react';  
import {setState} from '../actions/statemgmt' 
import ContactView from './ContactView'
import ContactsView from './ContactsView'
import {updateNewContact,
  _addValidationToContact,
  submitNewContact,
  updateContactForm,
  submitContactForm} from '../actions/contact'
import PropTypes from 'prop-types';
import $ from 'jquery'
//var createReactClass = require('create-react-class');
var Application = React.createClass({
    propTypes: {
      location: React.PropTypes.array.isRequired
    },
    componentWillMount: function() {
      $(function() {
        console.log('get all contacts from Apllicaton compwillmount ');
           $.get('/contacts', (res) => {
            console.log('receive after get res contacts ',res)
            setState({contacts:res})
           })
      })
    },
  
    render: function() {
      console.log('in app render ',this.props)
      switch (this.props.location[0]) {
        case 'contacts':
          if (this.props.location[1]) {
            return React.createElement(
              ContactView,
              Object.assign({}, this.props, {
                id: this.props.location[1],
                onChangeContact: updateContactForm,
                onSubmitContact: submitContactForm,
              })
            );
          }
          else {
            return React.createElement(
              ContactsView,
              Object.assign({}, this.props, {
                onChangeContact: updateNewContact,
                onSubmitContact: submitNewContact,
              })
             );
          }
          break;
        default:  
          return React.createElement('div', {}, 
            React.createElement('h1', {}, "Not Found"),
            React.createElement('a', {href: '#/contacts'}, "Contacts")
          );
      }
    },
  });
  
export default Application
  
  