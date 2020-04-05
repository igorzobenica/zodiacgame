import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Body from './Body';
import { HintTextBox  as image, HintTextBoxSmall as imageSmall } from "../Background";
import { Overlay } from '../index';
import { loadImage } from '../../helpers/loadImage';

const Card = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  width: 400px;
`;

const Modal = ({ children, onExited, onDismiss, show }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
  <Overlay show={show} onDismiss={onDismiss} onExited={onExited}>
    <Card isImgLoaded={isImgLoaded} aria-modal={show ? 'true' : undefined}>
      {children}
    </Card>
  </Overlay>
)};

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
