import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import {Typo} from ".";

const ImageWrapper = styled.div`
  text-align: center;
  > img {
    margin 0 auto;
    width: 5rem;
  }
  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
`;

const IconWithLabel = ({
  image,
  text,
  onClick,
  ...props
}) => {
  return (
    <ImageWrapper onClick={onClick}>
      <img src={image} alt="" {...props}/>
      <Typo.p noMargin>{text}</Typo.p>
    </ImageWrapper>
  )
}

IconWithLabel.propTypes = {
};

export default IconWithLabel;
