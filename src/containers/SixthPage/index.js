import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PageLayout from "../../components/PageLayout";
import FooterButtons from "../../components/FooterButtons";
import InputFieldWithButton from "../../components/InputFieldWithButton";
import styled from "styled-components";
import { Page6Background as image, Page6BackgroundSmall as imageSmall, Page6Rebus as imageRebus, Page6Hint as imageHint } from "../../ui/Background";
import { PAGE_5, PAGE_7 } from "../../routeConstants";
import HintsModal from "../../components/HintsModal";
import { loadImage } from "../../helpers/loadImage";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  margin: 1rem -1rem;
  box-shadow: 0px 0px 20px 5px #777;
  > img {
    max-width: 100%;
  }
`;

const HintImageWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  > img {
    max-width: 100%;
  }
`;

const maxLength = 20;

const correctAnswers = ["apollo twelve", "apollotwelve", "apollo 12", "apollo12", "apollo21"];

const SixthPage = ({ history }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase().trim());
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);

  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_7);
    } else {
      setValidationError(t('common.wrong_answer'));
    }
  };

  const onClickHint = () => {
    setShowModal(true);
  };

  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
        <PageLayout text={t('p6.main')}>
          <ImageWrapper><img src={imageRebus} alt="" /></ImageWrapper>
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
        <FooterButtons
          linkBack={PAGE_5}
          onClick={onClick}
          isDisabled={!inputValue}
          onClickHint={onClickHint}
        />
        <HintsModal show={showModal} text={t('p6.hint')} setShowModal={setShowModal}>
          <HintImageWrapper><img src={imageHint} alt="" /></HintImageWrapper>
        </HintsModal>
    </PageWrapper>
  );
};

SixthPage.propTypes = {};

export default SixthPage;
