import React, { useCallback } from 'react';
import { v4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => dispatch(actions.filterContacts(e.target.value)),
    [dispatch],
  );
  const filterId = v4();
  return (
    <div style={{ marginBottom: '40px' }}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Find contacts by name
        </InputGroup.Text>
        <FormControl
          type="text"
          value={value}
          onChange={onChange}
          id={filterId}
          placeholder="Enter name"
        />
      </InputGroup>
    </div>
  );
};

export default Filter;
