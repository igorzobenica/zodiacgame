import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import font from './extensions/font';

const StyledLabel = styled.label`
  ${font(600, '1.5rem')};
  margin-bottom: 0; // reset bootstrap
  ${({ top }) =>
    (top &&
      css`
        display: block;
        flex-direction: column;
        align-items: flex-start;
      `) ||
    css`
      display: flex;
      align-items: center;
      align-content: center;
      & > * {
        flex-grow: inherit;
      }
    `};
`;

const LabelLeft = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 1rem;
`;

const LabelRight = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 1rem;
`;

const LabelTop = styled.div`
  margin-bottom: 0.25rem;
`;

const Label = ({ text, position, children }) =>
  text ? (
    <StyledLabel top={position === 'top'}>
      {position === 'top' && (
        <LabelTop>
          {text}
        </LabelTop>
      )}
      {position === 'left' && (
        <LabelLeft>
          {text}
        </LabelLeft>
      )}
      {children}
      {position === 'right' && (
        <LabelRight>
          {text}
        </LabelRight>
      )}
    </StyledLabel>
  ) : (
    children
  );

Label.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'top']),
  children: PropTypes.node,
  text: PropTypes.string,
};

Label.defaultProps = {
  position: 'right',
};

Label.displayName = 'Label';

export default Label;
