import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {Typo, Button} from '../../ui';
import HintModal from "../../components/HintsModal";
// import Cookies from 'js-cookie';
import { getLanguageFromPath } from "../../helpers/getLanguageFromPath";
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
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  const onClick = () => {
    const lang = getLanguageFromPath() || 'en';
    history.push(`/${lang}/${PAGE_1}`);
  };
  const onClickLanguage = (lang) => {
    // Cookies.set('language', lang);
    i18n.changeLanguage(lang);
    history.replace(`/${lang}`);
    setShowModal(false)
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
          <Button onClick={() => {onClickLanguage(EN)}}>{t('common.english')}</Button>
          <Button onClick={() => {onClickLanguage(ES)}}>{t('common.spanish')}</Button>
        </ButtonsWrapper>
      </HintModal>
    </PageWrapper>
  )
}

StartPage.propTypes = {

}

export default StartPage
