import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import font from './extensions/font';

import { Label, TextInput, Typo } from '.';
import { SubmitLong as imageLong, SubmitLongWrong as imageLongWrong } from './Background';

const neutral = '#617086';

const InputOverlay = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 1;
  > i {
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);

    svg > * {
      stroke: ${neutral};
    }

    + input {
      padding-left: 3rem;
    }
  }
  > img {
    max-width:100%;
    max-height:100%;
    bottom: 1.75rem;
    position: relative;
  }
`;

const ExtraInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
`;

const StatusMessage = styled.div`
  ${font()};
  color: #c50d0c;
  text-align: center;
  flex-grow: 1;
  justify-self: start;
  margin-top: -1.5rem;
`;

const Input = React.forwardRef(
  (
    { theme, label, message, description, success, error, style, onEnter, children, ...props },
    ref,
  ) => {
    const status = (error && 'failure') || (success && 'success') || undefined;
    const variant = (error && 'FAILURE') || (success && 'SUCCESS') || undefined;

    const handleKeyDown = event => {
      if (event.key === 'Enter' || event.keyCode === 13 || event.which === 13) {
        if (onEnter) onEnter();
      }
    };

    return (
      <Label position="top" text={label}>
        {description && <Typo.Text>{description}</Typo.Text>}
        <InputOverlay status={status} style={style}>
          <TextInput ref={ref} variant={variant} onKeyDown={handleKeyDown} {...props} />
          {!error ? <img src={imageLong} alt=""/> : <img src={imageLongWrong} alt=""/>}
        </InputOverlay>
        {(status && message) || children ? (
          <ExtraInfoWrapper>
            {status && message && <StatusMessage variant={status}>{message}</StatusMessage>}
            {children}
          </ExtraInfoWrapper>
        ) : null}
      </Label>
    );
  },
);

Input.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
  onEnter: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'text']),
};

Input.defaultProps = {
  message: '',
  theme: {
    tokens: {
      SPACING_25: '0.25rem',
      SPACING_75: '0.75rem',
      SPACING_100: '1rem',
    },
    Form: {
      color: 'black',
      borderColor: 'grey',
      borderColorError: 'red',
    },
  },
};

export default memo(Input);