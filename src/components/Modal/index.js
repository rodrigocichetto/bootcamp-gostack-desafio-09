import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Close } from './styles';

const Modal = ({ children, onClose }) => {
  return (
    <Container>
      <Content>
        <Close onClick={onClose}>&times;</Close>
        {children}
      </Content>
    </Container>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
