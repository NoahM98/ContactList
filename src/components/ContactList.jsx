import React from "react"
import ContactRow from "./ContactRow"

const ContactList = (props) => {
  let contacts = props.contacts;

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <ContactRow contacts={contacts} />
      </tbody>
    </table>
  )
}

export default ContactList;
