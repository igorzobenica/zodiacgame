import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import InputFieldWithButton from '../../components/InputFieldWithButton';
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const InputFieldsWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: ${MEDIA_SMALL}px) {
    width: 70%;
  }

  > div {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const maxLength = 20;

const InputFields = ({
  validationErrors,
  inputValues,
  setInputValues,
  setValidationErrors,
  isCorrect,
  onEnter
}) => {
  const { t } = useTranslation();
  const inputFieldsData = [
    {
      id: 1,
      label: t('p3.q1')
    },
    {
      id: 2,
      label: t('p3.q2')
    },
    {
      id: 3,
      label: t('p3.q3')
    },
  ];
  return (
    <InputFieldsWrapper>
      {inputFieldsData.map(({
        id,
        label,
      }) => (
        <div key={id}>
          <InputFieldWithButton
            label={label}
            placeholder={t('common.placeholder')}
            maxLength={maxLength}
            isCorrect={isCorrect}
            inputValue={inputValues[id]}
            setInputValue={setInputValues[id]}
            setValidationError={setValidationErrors[id]}
            validationError={validationErrors[id]}
            onEnter={onEnter}
          />
        </div>
      ))}
    </InputFieldsWrapper>
  )
}

InputFields.propTypes = {
  validationErrors: PropTypes.object,
  inputValues: PropTypes.object,
  setInputValues: PropTypes.object,
  isCorrect: PropTypes.bool,
}

export default InputFields
