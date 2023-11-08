import React, { useState } from 'react';
import { FormStyle } from './Form.styled';

const Form = ({ onChange }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange({ name, number });
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        <span className="input-title">Name</span>
        <input
          className="input"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label htmlFor="number">
        <span className="input-title">Number</span>
        <input
          className="input"
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>
      <button
        className="btn btn-primary btn-block btn-large"
        type="submit"
        disabled={name === '' && number === ''}
      >
        Add Contact
      </button>
    </FormStyle>
  );
};

export default Form;
