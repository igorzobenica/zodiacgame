import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {Typo} from '../../ui';
import FooterButtons from "../../components/FooterButtons";
import { loadImage } from "../../helpers/loadImage";
import { PAGE_2 } from "../../routeConstants";
import { Page1Background as image, Page1BackgroundSmall as imageSmall, Page1Logo as logo } from "../../ui/Background";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
  text-align: center;
`;

const PageLayout = styled.div`
  padding: 4rem 0.5rem 0.5rem;
`;

const ContentWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  max-width: 9rem;
  margin: 0 auto;
  > img {
    max-width: 100%;
  }
`;

const FirstPage = props => {
  const { t } = useTranslation();
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <ContentWrapper>
        <PageLayout>
          <ImageWrapper><img src={logo} alt="" /></ImageWrapper>
          <Typo.p>{t('p1.main')}</Typo.p>
        </PageLayout>
        <FooterButtons justifyContent="flex-end" labelNext={t('p1.button')} linkNext={PAGE_2}/>
      </ContentWrapper>
    </PageWrapper>
  )
}

FirstPage.propTypes = {

}

export default FirstPage
