import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Body from './Body';
import { HintTextBox  as image } from "../Background";
import { Overlay } from '../index';

const Card = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  width: 400px;
`;

const Modal = ({ children, onExited, onDismiss, show }) => (
  <Overlay show={show} onDismiss={onDismiss} onExited={onExited}>
    <Card aria-modal={show ? 'true' : undefined}>
      {children}
    </Card>
  </Overlay>
);

Modal.Body = Body;

Modal.defaultProps = {
  isLoading: false,
  disableAccept: false,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onExited: PropTypes.func,
  onDismiss: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
