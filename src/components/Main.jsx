import React, { useState, useEffect } from 'react';
import dummyContacts from '../dummyData/index.js';
import ContactList from './ContactList';


const Main = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch("http://jsonplace-univclone.herokuapp.com/users");
      const result = await response.json();
      setContacts(result);
    } catch (err) {
      console.err(err);
    }
  }
  useEffect(getContacts, []);
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default Main;
