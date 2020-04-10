import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { loadImage } from "../../helpers/loadImage";
import HintModal from "../../components/HintsModal";
import { Page1Background as image, Page1BackgroundSmall as imageSmall } from "../../ui/Background";
import { PAGE_3, PAGE_5 } from "../../routeConstants";

const PageWrapper = styled.div`
background-image: url(${props => props.isImgLoaded ? image : imageSmall});
display: flex;
`

const maxLength = 20;

const FourthPage = ({ history }) => {
  const { t } = useTranslation();
  const correctAnswers = [
    t('common.sky_valley'),
    t('common.sky_valley_road'),
    t('common.sky_valley_rd'),
    t('common.sky_valley_rd_dot'),
  ];
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_5);
    } else {
      setValidationError(t('common.wrong_answer'));
    }
  };
  const onClickHint = () => {
    setShowModal(true);
  };
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <div>
        <PageLayout text={t('p4.main')}>
          <InputFieldWithButton
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder={t('common.placeholder')}
            maxLength={maxLength}
            validationError={validationError}
            setValidationError={setValidationError}
            onEnter={inputValue && onClick}
          />
        </PageLayout>
        <FooterButtons linkBack={PAGE_3} onClick={onClick} isDisabled={!inputValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintModal show={showModal} text={t('p4.hint')} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

FourthPage.propTypes = {};

export default FourthPage;
