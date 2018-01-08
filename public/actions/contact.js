
function updateNewContact(contact) {
    setState({ newContact: contact });
}


function submitNewContact() {
    var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }
    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }
    //if (contact.name && contact.email) {
    setState(
        Object.keys(contact.errors).length === 0
        ? {
            newContact: Object.assign({}, CONTACT_TEMPLATE),
            contacts: state.contacts.slice(0).concat(contact),
            }
        : { newContact: contact }
    );
}