import React, { useState } from 'react';
import dummyContacts from '../dummyData/index.js';


const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>

            {/* Contact 1 */}

            {
              contacts.map((contact, index) => {
                return (
                  <tr key={index + contact.id}>
                    <td key={index + contact.name}>{contact.name}</td>
                    <td key={index + contact.phone}>{contact.phone}</td>
                    <td key={index + contact.email}>{contact.email}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
