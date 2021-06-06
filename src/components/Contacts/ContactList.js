import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import ContactItem from './ContactItem';
import selectors from '../../redux/phonebook/phonebook-selectors';
import ListGroup from 'react-bootstrap/ListGroup';

function ContactList() {
  const contactList = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    id => {
      dispatch(operations.deleteContact(id));
    },
    [dispatch],
  );
  return (
    <>
      <ListGroup>
        {contactList.map(item => (
          <ContactItem
            key={item.id}
            info={item}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ListGroup>
    </>
  );
}

export default ContactList;
