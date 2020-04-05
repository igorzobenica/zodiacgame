import React, { useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import InputFields from "./InputFields";
import FooterButtons from "../../components/FooterButtons";
import styled from 'styled-components';
import { PAGE_3_HINT_TEXT } from '../constants';
import { Page3Background as image, Page3BackgroundSmall as imageSmall } from "../../ui/Background";
import HintModal from "../../components/HintsModal";
import { PAGE_2, PAGE_4 } from "../../routeConstants";
import { loadImage } from "../../helpers/loadImage";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  display: flex;
`

const hintText = PAGE_3_HINT_TEXT;

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
  const [showModal, setShowModal] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  const isFirstCorrect = firstInputCorrectAnswers.includes(
    firstInputValue.toLowerCase().trim()
  );
  const isSecondCorrect = secondInputCorrectAnswers.includes(
    secondInputValue.toLowerCase().trim()
  );
  const isThirdCorrect = thirdInputCorrectAnswers.includes(
    thirdInputValue.toLowerCase().trim()
  );
  const onClick = () => {
    setFirstInputValidationError("");
    setSecondInputValidationError("");
    setThirdInputValidationError("");
    if (isFirstCorrect && isSecondCorrect && isThirdCorrect) {
      history.push(PAGE_4);
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
  const onClickHint = () => {
    setShowModal(true);
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
    <PageWrapper isImgLoaded={isImgLoaded}>
      <div>
        <PageLayout>
          <InputFields
            validationErrors={validationErrors}
            inputValues={inputValues}
            setInputValues={setInputValues}
            setValidationErrors={setValidationErrors}
            isCorrect={isFirstCorrect && isSecondCorrect && isThirdCorrect}
            onEnter={!hasEmptyValue && onClick}
          />
        </PageLayout>
        <FooterButtons linkBack={PAGE_2} onClick={onClick} isDisabled={hasEmptyValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

ThirdPage.propTypes = {};

export default ThirdPage;
