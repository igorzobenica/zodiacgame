import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_7_CONTENT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page7Background as image } from "../../ui/Background";

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
`

const contentText = PAGE_7_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ['seven', '7'];

const SeventhPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());

  const onClick = () => {
    if (isCorrect) {
      history.push("/7");
    } else {
      setValidationError("wrong answer");
    }
  };

  return (
    <PageWrapper>
      <div>
        <PageLayout text={contentText}>
          <InputFieldWithButton
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder="Write your answer"
            maxLength={maxLength}
            validationError={validationError}
            setValidationError={setValidationError}
            onEnter={onClick}
          />
        </PageLayout>
        <FooterButtons linkBack="/5" onClick={onClick} isDisabled={!inputValue}/>
      </div>
      <div></div>
    </PageWrapper>
  );
};

SeventhPage.propTypes = {};

export default SeventhPage;
