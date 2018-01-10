    //contactform component
    var ContactForm = React.createClass({
        propTypes: {
          //contact: React.PropTypes.object.isRequired,
          value: React.PropTypes.object.isRequired,
          onChange: React.PropTypes.func.isRequired,
          onSubmit: React.PropTypes.func.isRequired,
        },
        onNameChange: function(e) {
          this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
        },
  
        onEmailChange: function(e) {
          this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
        },
  
        onDescriptionChange: function(e) {
          this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
        },
  
        onSubmit: function(e) {
          e.preventDefault();
          this.props.onSubmit();
        },
        
        componentDidUpdate: function(prevProps) {
          var value = this.props.value;
          var prevValue = prevProps.value;
  
          if (this.isMounted && value.errors && value.errors != prevValue.errors) {
            if (value.errors.name) {
              this.refs.name.focus();
            }
            else if (value.errors.email) {
              this.refs.email.focus();
            }
          }
        },
        
        render: function() {
          var errors = this.props.value.errors || {};
  
          // var oldContact = this.props.value;
          //var onChange = this.props.onChange;
          return (
           // React.createElement('form', {},
            React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
              React.createElement('input', {
                  type: 'text',
                  className: errors.name && 'ContactForm-error',
                  placeholder: 'Name (required)',
                  value: this.props.value.name,
                  // onChange: function(e) {
                  //             onChange(Object.assign({}, oldContact, {name: e.target.value}));
                  //           },
                  ref:'name',
                  autoFocus: true,
                  onChange: this.onNameChange,
  
              }),
              React.createElement('input', {
                  type: 'email',
                  className: errors.email && 'ContactForm-error',  
                  placeholder: 'Email (required)',
                  value: this.props.value.email,
                  // onChange: function(e) {
                  //            onChange(Object.assign({}, oldContact, {email: e.target.value}));
                  //           },
                  ref:'email',
                  onChange: this.onEmailChange,
              }),
              React.createElement('textarea', {
                  placeholder: 'Description',
                  value: this.props.value.description,
                  // onChange: function(e) {
                  //            onChange(Object.assign({}, oldContact, {description: e.target.value}));
                  //           },
                  ref:'description',
                  onChange: this.onDescriptionChange,
              }),
              React.createElement('button', {type: 'submit'}, "Save")
              )
          )
        },
        
        
      })
  