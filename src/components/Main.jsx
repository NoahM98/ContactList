import React, {useState} from 'react';
import dummyContacts from '../dummyData/index.js';


const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {
        contacts.map(contact => {
          return contact.name;
        }) }</div>
    </div>
  );
};

export default Main;
