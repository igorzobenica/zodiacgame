import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PageLayout from "../../components/PageLayout";
import InputFields from "./InputFields";
import FooterButtons from "../../components/FooterButtons";
import styled from 'styled-components';
import { Page3Background as image, Page3BackgroundSmall as imageSmall } from "../../ui/Background";
import HintModal from "../../components/HintsModal";
import { PAGE_2, PAGE_4 } from "../../routeConstants";
import { loadImage } from "../../helpers/loadImage";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  display: flex;
`

const ThirdPage = ({ history }) => {
  const { t } = useTranslation();
  const firstInputCorrectAnswers = [t('common.yellow')];
  const secondInputCorrectAnswers = [t('common.twenty_one'), "21"];
  const thirdInputCorrectAnswers = [t('common.red')];
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
        setFirstInputValidationError(t('common.wrong_answer'));
      }
      if (!isSecondCorrect) {
        setSecondInputValidationError(t('common.wrong_answer'));
      }
      if (!isThirdCorrect) {
        setThirdInputValidationError(t('common.wrong_answer'));
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
            onEnter={!hasEmptyValue ? onClick : null}
          />
        </PageLayout>
        <FooterButtons linkBack={PAGE_2} onClick={onClick} isDisabled={hasEmptyValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintModal show={showModal} text={t('p3.hint')} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

ThirdPage.propTypes = {};

export default ThirdPage;
