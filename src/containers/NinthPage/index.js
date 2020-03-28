import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_9_CONTENT_TEXT1, PAGE_9_CONTENT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page9Background as image, Page9Rebus as imageRebus } from "../../ui/Background";
import { Typo } from '../../ui';
import { PAGE_8, PAGE_10 } from "../../routeConstants";

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
`

const StyledParagraph = styled(Typo.p)`
  text-align: center;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  > div {
    margin: 0;
  }
`

const contentText = PAGE_9_CONTENT_TEXT;
const contentText1 = PAGE_9_CONTENT_TEXT1;
const maxLength = 20;

const correctAnswers = ['knife'];

const NinthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_10);
    } else {
      setValidationError("wrong answer");
    }
  };

  return (
    <PageWrapper>
      <div>
        <PageLayout text={contentText} image={imageRebus}>
          <StyledParagraph>{contentText1}</StyledParagraph>
          <InputWrapper>
            <Typo.p>by</Typo.p>
            <InputFieldWithButton
              inputValue={inputValue}
              setInputValue={setInputValue}
              placeholder="Write your answer"
              maxLength={maxLength}
              validationError={validationError}
              setValidationError={setValidationError}
              onEnter={onClick}
            />
          </InputWrapper>
        </PageLayout>
        <FooterButtons linkBack={PAGE_8} onClick={onClick} isDisabled={!inputValue}/>
      </div>
      <div></div>
    </PageWrapper>
  );
};

NinthPage.propTypes = {};

export default NinthPage;
