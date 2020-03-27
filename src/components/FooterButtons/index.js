import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from '../../ui';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const FooterButtons = ({
  linkBack,
  linkNext,
  labelNext,
  justifyContent,
  onClick,
  isDisabled,
}) => {
  return (
    <Wrapper justifyContent={justifyContent}>
      {linkBack && <Button as={Link} to={linkBack}>
        back
      </Button>}
      {(linkNext || onClick) && <Button as={!onClick && Link} to={linkNext} onClick={onClick} disabled={isDisabled}>
        {labelNext}
      </Button>}
    </Wrapper>
  );
};

FooterButtons.propTypes = {
  linkBack: PropTypes.string,
  linkNext: PropTypes.string,
};

FooterButtons.defaultProps = {
  justifyContent: 'space-around',
  labelNext: 'submit',
  isDisabled: false,
};

export default FooterButtons;
