import React from 'react';
import PropTypes from 'prop-types';
//import ContactItemStyled from './ContactItemStyled';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const ContactItem = ({ info: { name, number, id }, onDeleteContact }) => {
  const deleteContact = () => {
    onDeleteContact(id);
  };
  return (
    <ListGroup.Item>
      <Row>
        <Col>
          {name}: {number}
        </Col>
        <Col lg="3">
          <Button variant="danger" onClick={deleteContact}>
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
