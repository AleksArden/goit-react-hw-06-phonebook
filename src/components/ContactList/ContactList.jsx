import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/phonebook/phonebook.selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, normalizedFilter]);

  return (
    <ul className={css.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};
