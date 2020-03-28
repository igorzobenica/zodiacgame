import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_4_CONTENT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page4Background as image } from "../../ui/Background";
import { PAGE_3, PAGE_5 } from "../../routeConstants";

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
`

const contentText = PAGE_4_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ['sky valley', 'sky valley road', 'sky valley rd', 'sky valley rd.'];

const FourthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_5);
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
        <FooterButtons linkBack={PAGE_3} onClick={onClick} isDisabled={!inputValue}/>
      </div>
      <div></div>
    </PageWrapper>
  );
};

FourthPage.propTypes = {};

export default FourthPage;