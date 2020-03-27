import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_6_CONTENT_TEXT } from "../constants";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from "styled-components";
import { Page6Background as image, Page6Rebus as imageRebus } from "../../ui/Background";

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

const contentText = PAGE_6_CONTENT_TEXT;
const maxLength = 20;

const correctAnswers = ["apollo twelve", "apollo 12", "apollo12"];

const SixthPage = ({ history }) => {
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());

  const onClick = () => {
    if (isCorrect) {
      history.push("/6");
    } else {
      setValidationError("wrong answer");
    }
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
          linkBack="/4"
          onClick={onClick}
          isDisabled={!inputValue}
        />
    </PageWrapper>
  );
};

SixthPage.propTypes = {};

export default SixthPage;
