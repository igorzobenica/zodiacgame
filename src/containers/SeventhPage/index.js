import React, { useState,useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page1Background as image, Page1BackgroundSmall as imageSmall } from "../../ui/Background";
import { PAGE_6, PAGE_8 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";
import { loadImage } from "../../helpers/loadImage";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  display: flex;
`

const maxLength = 20;

const SeventhPage = ({ history }) => {
  const { t } = useTranslation();
  const correctAnswers = [t('common.seven'), '7'];
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_8);
    } else {
      setValidationError(t('common.wrong_answer'));
    }
  };
  const onClickHint = () => {
    setShowModal(true);
  };

  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <div>
        <PageLayout text={t('p7.main')}>
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
        <FooterButtons linkBack={PAGE_6} onClick={onClick} isDisabled={!inputValue} onClickHint={onClickHint}/>
      </div>
      <div></div>
      <HintsModal show={showModal} text={t('p7.hint')} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

SeventhPage.propTypes = {};

export default SeventhPage;
