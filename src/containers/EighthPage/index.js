import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from 'styled-components';
import { Page1Background as image, Page1BackgroundSmall as imageSmall, Page9Rebus as imageRebus } from "../../ui/Background";
import { Typo } from '../../ui';
import { loadImage } from "../../helpers/loadImage";
import { PAGE_7, PAGE_9 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
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

const maxLength = 20;

const EighthPage = ({ history }) => {
  const { t } = useTranslation();
  const correctAnswers = ['knife', t('common.byknife'), 'by knife'];
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
      history.push(PAGE_9);
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
        <PageLayout text={t('p8.main')} image={imageRebus}>
          <StyledParagraph>{t('p8.sub')}</StyledParagraph>
          <InputWrapper>
            <Typo.p>by</Typo.p>
            <InputFieldWithButton
              inputValue={inputValue}
              setInputValue={setInputValue}
              placeholder={t('common.placeholder')}
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
      <HintsModal show={showModal} text={t('p8.hint')} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

export default EighthPage;
