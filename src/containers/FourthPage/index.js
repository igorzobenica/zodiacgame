import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_4_CONTENT_TEXT, PAGE_4_HINT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import HintModal from "../../components/HintsModal";
import { Page4Background as image } from "../../ui/Background";
import { PAGE_3, PAGE_5 } from "../../routeConstants";

const PageWrapper = styled.div`
background-image: url(${image});
display: flex;
`

const hintText = PAGE_4_HINT_TEXT;
const contentText = PAGE_4_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ['sky valley', 'sky valley road', 'sky valley rd', 'sky valley rd.'];

const FourthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_5);
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
        <PageLayout text={contentText}>
          <InputFieldWithButton
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder="Write your answer"
            maxLength={maxLength}
            validationError={validationError}
            setValidationError={setValidationError}
            onEnter={inputValue && onClick}
          />
        </PageLayout>
        <FooterButtons linkBack={PAGE_3} onClick={onClick} isDisabled={!inputValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

FourthPage.propTypes = {};

export default FourthPage;
