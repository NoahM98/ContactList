import React from "react";

const ContactRow = (props) => {
    let contacts = props.contacts;
    return (
        <>
            {
                contacts.map((contact, index) => {
                    return (
                        <tr key={index + contact.id}
                            onClick={() => {
                                props.selectContact(contact.id);
                            }}>
                            <td key={index + contact.name}>{contact.name}</td>
                            <td key={index + contact.phone}>{contact.phone}</td>
                            <td key={index + contact.email}>{contact.email}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ContactRow;
