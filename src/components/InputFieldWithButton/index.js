import React from "react";
import { Input } from "../../ui";
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.width || '75%'};
`

const InputFieldWithButton = ({
  type,
  width,
  inputValue,
  setInputValue,
  label,
  placeholder,
  maxLength,
  validationError,
  setValidationError,
  ...props
}) => {
  const onChange = e => {
    if (setValidationError) {
      setValidationError('');
    }
    const { value } = e.target;
    setInputValue(value);
  };
  return (
    <InputWrapper width={width}>
      <Input
        type={type}
        value={inputValue}
        label={label}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        error={!!validationError}
        message={validationError || ""}
        {...props}
      />
    </InputWrapper>
  );
};

InputFieldWithButton.defaultProps = {
  type: 'text'
};

InputFieldWithButton.propTypes = {};

export default InputFieldWithButton;
