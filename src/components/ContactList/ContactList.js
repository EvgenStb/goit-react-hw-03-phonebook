import React from 'react';
import PropTypes from 'prop-types'
import ContactItem from 'components/ContactItem/ContactItem';

function ContactList({ contacts, filter, onClick }) {
  let handledContacts = contacts;
  if (handledContacts.lenght === null){
    return
  }
  const filterReq = filter.toLowerCase();
  if (isNaN(filter)) {
      handledContacts = handledContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterReq))
    } else {handledContacts = handledContacts.filter(contact =>
      contact.number.includes(filter)
    );}
      
      
  return (
    <ul>
      {handledContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
