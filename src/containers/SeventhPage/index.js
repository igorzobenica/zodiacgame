import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_7_CONTENT_TEXT, PAGE_7_HINT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page7Background as image } from "../../ui/Background";
import { PAGE_6, PAGE_8 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
`

const hintText = PAGE_7_HINT_TEXT;
const contentText = PAGE_7_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ['seven', '7'];

const SeventhPage = ({ history }) => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_8);
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
            onEnter={onClick}
          />
        </PageLayout>
        <FooterButtons linkBack={PAGE_6} onClick={onClick} isDisabled={!inputValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintsModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

SeventhPage.propTypes = {};

export default SeventhPage;
