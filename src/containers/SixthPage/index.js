import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_6_CONTENT_TEXT, PAGE_6_HINT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from "styled-components";
import { Page6Background as image, Page6Rebus as imageRebus } from "../../ui/Background";
import { PAGE_5, PAGE_7 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";

const PageWrapper = styled.div`
  background-image: url(${image});
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  margin: 1rem -1rem;
  box-shadow: 0px 0px 20px 5px #777;
  > img {
    max-width: 100%;
  }
`;

const hintText = PAGE_6_HINT_TEXT;
const contentText = PAGE_6_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ["apollo twelve", "apollotwelve", "apollo 12", "apollo12", "apollo21"];

const SixthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_7);
    } else {
      setValidationError("wrong answer");
    }
  };

  const onClickHint = () => {
    setShowModal(true);
  };

  return (
    <PageWrapper>
        <PageLayout text={contentText}>
          <ImageWrapper><img src={imageRebus} alt="" /></ImageWrapper>
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
        <FooterButtons
          linkBack={PAGE_5}
          onClick={onClick}
          isDisabled={!inputValue}
          onClickHint={onClickHint}
        />
        <HintsModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

SixthPage.propTypes = {};

export default SixthPage;
