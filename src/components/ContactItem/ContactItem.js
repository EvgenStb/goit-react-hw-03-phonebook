import React from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({ id, name, number, onClick }) => (
  <li key={id}>
    <span>{name}:</span>
    <span>{number}</span>
    <button type="button" onClick={() => onClick(id)}>
      Delete
    </button>
  </li>
);
        
 ContactItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
 };
export default ContactItem;