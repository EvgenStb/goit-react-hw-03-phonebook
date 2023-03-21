import React from 'react'


const Filter = ({ filter, onChange }) => {
  return (
    <>
      <p>Find contacts</p>
      <input
        type="text"
        onChange={onChange}
        value={filter.value}
        name={!Number(filter) ? 'name' : 'number'}
      />
    </>
  );
};

export default Filter