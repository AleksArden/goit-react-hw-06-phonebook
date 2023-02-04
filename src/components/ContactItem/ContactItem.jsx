import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/phonebook/phonebook.slice';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactAction(id));
  };
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
