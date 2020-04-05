import React from "react";
import { Input } from "../../ui";
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 0 auto;
  max-width: 75%;
`

const InputFieldWithButton = ({
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
    <InputWrapper>
      <Input
        type="text"
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

InputFieldWithButton.propTypes = {};

export default InputFieldWithButton;
