import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Body from './Body';
import { HintTextBox  as image, HintTextBoxSmall as imageSmall, Page9ModalSmall, Page9Modal } from "../Background";
import { Overlay } from '../index';
import { loadImage } from '../../helpers/loadImage';

const Card = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  ${({isLarge}) => isLarge ? 
    css`
      background-image: url(${props => props.isImgLoaded ? Page9Modal : Page9ModalSmall});
      height: 557px;
    ` : 
    css`
      background-image: url(${props => props.isImgLoaded ? image : imageSmall});
      height: 360px;
    `}
`;

const Modal = ({ children, onExited, onDismiss, show, isLarge }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
  <Overlay show={show} onDismiss={onDismiss} onExited={onExited}>
    <Card isImgLoaded={isImgLoaded} isLarge={isLarge} aria-modal={show ? 'true' : undefined}>
      {children}
    </Card>
  </Overlay>
)};

Modal.Body = Body;

Modal.defaultProps = {
  isLoading: false,
  disableAccept: false,
  isLarge: false,
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onExited: PropTypes.func,
  onDismiss: PropTypes.func,
  isLoading: PropTypes.bool,
  isLarge: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
