import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {Typo, Button} from '../../ui';
import HintModal from "../../components/HintsModal";
import Cookies from 'js-cookie';
import { loadImage } from "../../helpers/loadImage";
import { EN, ES } from "../constants";
import { PAGE_1 } from "../../routeConstants";
import { Page2Background as image, Page2BackgroundSmall as imageSmall } from "../../ui/Background";
import { MEDIA_SMALL } from '../../ui/theme/tokens/breakpoints';

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
`;

const PageLayout = styled.div`
  padding: 4rem;
  max-width: 60%;
`;

const ButtonsWrapper = styled.div`
  @media (min-width: ${MEDIA_SMALL}px) {
    button {
      &:last-child {
        margin-left: 2rem;
      }
    }
  }
`;

const StartPage = ({history, ...props}) => {
  const { t, i18n } = useTranslation();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  const onClick = () => {
    setShowModal(true);
  };
  const onClickLanguage = (lang) => {
    i18n.changeLanguage(lang);
    history.push(`${lang}/${PAGE_1}`);
  };
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <PageLayout>
       <Typo.h1>{t('p0.title')}</Typo.h1>
       <Typo.h2>{t('p0.subtitle')}</Typo.h2>
       <Typo.p>{t('p0.main')}</Typo.p>
       <Button onClick={onClick}>{t('p0.button')}</Button>
      </PageLayout>
      <HintModal show={showModal} text={t('p0.modal_text')} setShowModal={setShowModal} textCenter={true}>
        <ButtonsWrapper>
          <Button onClick={() => {Cookies.set('language', EN);onClickLanguage(EN)}}>{t('common.english')}</Button>
          <Button onClick={() => {Cookies.set('language', ES);onClickLanguage(ES)}}>{t('common.spanish')}</Button>
        </ButtonsWrapper>
      </HintModal>
    </PageWrapper>
  )
}

StartPage.propTypes = {

}

export default StartPage
