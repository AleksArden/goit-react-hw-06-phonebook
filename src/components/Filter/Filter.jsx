import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'redux/phonebook/phonebook.slice';
import { getFilter } from 'redux/phonebook/phonebook.selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) => {
    dispatch(filterAction(value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};
