import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_9_CONTENT_TEXT1, PAGE_9_CONTENT_TEXT, PAGE_9_HINT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page9Background as image, Page9Rebus as imageRebus } from "../../ui/Background";
import { Typo } from '../../ui';
import { PAGE_7, PAGE_9 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";

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

const hintText = PAGE_9_HINT_TEXT;
const contentText = PAGE_9_CONTENT_TEXT;
const contentText1 = PAGE_9_CONTENT_TEXT1;
const maxLength = 20;

const correctAnswers = ['knife', 'byknife', 'by knife'];

const EighthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_9);
    } else {
      setValidationError("wrong answer");
    }
  };
  const onClickHint = () => {
    setShowModal(true);
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
              onEnter={inputValue && onClick}
            />
          </InputWrapper>
        </PageLayout>
        <FooterButtons linkBack={PAGE_7} onClick={onClick} isDisabled={!inputValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintsModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

export default EighthPage;
