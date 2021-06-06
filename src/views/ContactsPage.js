import React, { useEffect } from 'react';
import Form from './../components/Form/ContactForm';
import Filter from './../components/Filter/Filter';
import ContactList from './../components/Contacts/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../redux/phonebook/phonebook-selectors';
import operations from '../redux/phonebook/phonebook-operations';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function ContactsPage() {
  const isLoading = useSelector(selectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container
      fluid="xl"
      style={{
        paddingTop: '20px',
        paddingBottom: '30px',
      }}
    >
      <Row className="justify-content-md-center">
        <Col lg="5">
          <h1>Phonebook</h1>
          <Form />
          <Filter />
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          )}
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsPage;
