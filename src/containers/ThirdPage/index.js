import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import InputFields from "./InputFields";
import FooterButtons from "../../components/FooterButtons";
import styled from 'styled-components';
import { Page3Background as image } from "../../ui/Background";

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
`

const firstInputCorrectAnswers = ["yellow"];
const secondInputCorrectAnswers = ["twenty one", "21"];
const thirdInputCorrectAnswers = ["red"];

const ThirdPage = ({ history }) => {
  const [firstInputValidationError, setFirstInputValidationError] = useState("");
  const [secondInputValidationError, setSecondInputValidationError] = useState("");
  const [thirdInputValidationError, setThirdInputValidationError] = useState("");
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [thirdInputValue, setThirdInputValue] = useState("");
  const isFirstCorrect = firstInputCorrectAnswers.includes(
    firstInputValue.toLowerCase()
  );
  const isSecondCorrect = secondInputCorrectAnswers.includes(
    secondInputValue.toLowerCase()
  );
  const isThirdCorrect = thirdInputCorrectAnswers.includes(
    thirdInputValue.toLowerCase()
  );
  const onClick = () => {
    setFirstInputValidationError("");
    setSecondInputValidationError("");
    setThirdInputValidationError("");
    if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
      history.push("/3");
    } else {
      if (!isFirstCorrect) {
        setFirstInputValidationError("wrong answer");
      }
      if (!isSecondCorrect) {
        setSecondInputValidationError("wrong answer");
      }
      if (!isThirdCorrect) {
        setThirdInputValidationError("wrong answer");
      }
    }
  };
  const validationErrors = {
    '1': firstInputValidationError,
    '2': secondInputValidationError,
    '3': thirdInputValidationError,
  };
  const setInputValues = {
    '1': setFirstInputValue,
    '2': setSecondInputValue,
    '3': setThirdInputValue,
  };
  const inputValues = {
    '1': firstInputValue,
    '2': secondInputValue,
    '3': thirdInputValue,
  };
  const setValidationErrors = {
    '1': setFirstInputValidationError,
    '2': setSecondInputValidationError,
    '3': setThirdInputValidationError,
  };
  const hasEmptyValue = Object.keys(inputValues).map(key => inputValues[key]).includes('');

  return (
    <PageWrapper>
      <div>
        <PageLayout>
          <InputFields
            validationErrors={validationErrors}
            inputValues={inputValues}
            setInputValues={setInputValues}
            setValidationErrors={setValidationErrors}
            isCorrect={isFirstCorrect && isSecondCorrect && isThirdCorrect}
          />
        </PageLayout>
        <FooterButtons linkBack="/1" onClick={onClick} isDisabled={hasEmptyValue}/>
      </div>
      <div></div>
    </PageWrapper>
  );
};

ThirdPage.propTypes = {};

export default ThirdPage;
