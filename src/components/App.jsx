import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount (){
    let storageData = localStorage.getItem('contacts');
    let dataToState = JSON.parse(storageData);
    if (this.state.contacts.length) {
      return
    }
    this.setState({
      contacts: [...dataToState]
    })
  }
  componentDidUpdate (prevProps, prevState){
    if (prevState.contacts !== this.state.contacts) {
      let dataToStorage = JSON.stringify(this.state.contacts)
      localStorage.setItem('contacts', dataToStorage);
    }
  }
  
  GetContactData = data => {
    const isContactPresent = this.state.contacts.find( contact => contact.name === data.name);
    if (isContactPresent) {
      Notiflix.Notify.failure(`${data.name} is already in contacts`)
    }
    const newContact = { ...data, id: nanoid() };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  handleFilter = e => {
    this.setState({filter: e.target.value})
  }

  contactDelete = id => {
    this.setState(({contacts}) => ({contacts: contacts.filter(contact => contact.id !== id)}))
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          addContact={this.GetContactData}
          filter={this.state.filter}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.contactDelete}
        />
      </>
    );
  }
}
 
export default App;