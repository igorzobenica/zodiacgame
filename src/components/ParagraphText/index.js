import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Typo } from "../../ui";

const TextWrapper = styled.div`
  white-space: pre-wrap;
`;

const ParagraphText = ({
  children,
  text,
}) => {
  return (
    <TextWrapper>
      <Typo.p>{text}</Typo.p>
      {children}
    </TextWrapper>
  );
};

ParagraphText.propTypes = {
  textArray: PropTypes.array,
};

export default ParagraphText;
