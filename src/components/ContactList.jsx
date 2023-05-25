import React from "react"

const ContactList = (props) => {
    let contacts = props.contacts

    return (
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

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
    )
}

export default ContactList;


