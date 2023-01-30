import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};
ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
