import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Input } from './FormStyle.styled';

import { selectFilter } from 'redux/contactsBook/filter/filter-selector';
import { setFilter } from 'redux/contactsBook/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact by name
        <Input type="text" name="filter" onChange={onFilter} value={filter} />
      </label>
    </>
  );
};

Filter.filter = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
