import React, { useState, useEffect } from 'react';
// import dummyContacts from '../dummyData/index.js';
import ContactList from './ContactList';
import SingleContact from './SingleContact';


const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  const getContacts = async () => {
    try {
      const response = await fetch("http://jsonplace-univclone.herokuapp.com/users");
      const result = await response.json();
      setContacts(result);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(getContacts, []);
  const selectContact = async (contactId) => {
    try {
      const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`);
      const result = await response.json();
      console.log(result);
      setSelectedContact(result);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ?
          <SingleContact selectedContact={selectedContact} /> :
          <ContactList contacts={contacts} selectContact={selectContact} />}
      </div>
    </div>
  );
};

export default Main;
