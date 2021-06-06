import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.getAllContacts);
  const dispatch = useDispatch();

  // const nameInputId = v4();
  //const numberInputId = v4();

  const handleNameChange = useCallback(e => {
    const { value } = e.currentTarget;
    setName(value);
  }, []);

  const handleNumberChange = useCallback(e => {
    const { value } = e.currentTarget;
    setNumber(value);
  }, []);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (contacts.some(item => item.name === name)) {
        alert(`${name} is already in contacts`);
      } else {
        dispatch(operations.addContact({ name, number }));
      }
      reset();
    },
    [dispatch, contacts, name, number],
  );

  return (
    <Form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicTel">
        <Form.Label>Number</Form.Label>
        <Form.Control
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </Form.Group>

      <div className="text-center">
        <Button type="submit" variant="primary">
          Add contact
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
