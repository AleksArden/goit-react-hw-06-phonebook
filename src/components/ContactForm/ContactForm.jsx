import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useState } from 'react';

import css from './ContactForm.module.css';

export const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const [number, setNumber] = useState('');
  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const hasSameName = contacts.some(contact => contact.name === name);
    hasSameName
      ? Notiflix.Notify.warning(`${name} is already in contacts`, {
          position: 'center-center',
          cssAnimationStyle: 'zoom',
        })
      : addContact({ name, number });
    hasSameName || (setName('') && hasSameName) || setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChangeName}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChangeNumber}
          />
        </label>
      </div>
      <button className={css.button}>Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
