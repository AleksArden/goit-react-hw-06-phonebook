import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { addContactAction, deleteContactAction } from 'redux/contacts.slice';
import { filterAction } from 'redux/filter.slice';
import { getContacts, getFilters } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  console.log(contacts);

  const dispatch = useDispatch();

  const addContact = data => {
    dispatch(addContactAction(data));
  };

  const handleSearch = ({ target: { value } }) => {
    dispatch(filterAction(value));
  };

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, normalizedFilter]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm addContact={addContact} contacts={contacts} />

      <h2 className={css.subtitle}>Contacts</h2>
      <div className={css.container}>
        <Filter onChange={handleSearch} value={filter} />
        <ContactList onDelete={handleDelete} contacts={filterContacts} />
      </div>
    </div>
  );
};
