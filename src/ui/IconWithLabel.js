import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import {Typo} from ".";

const ImageWrapper = styled.div`
  max-width: 7rem;
  margin: 0 auto;
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
    <div>
      <ImageWrapper onClick={onClick}>
        <img src={image} alt="" {...props}/>
        <Typo.P noMargin>{text}</Typo.P>
      </ImageWrapper>
    </div>
  )
}

IconWithLabel.propTypes = {
};

export default IconWithLabel;
