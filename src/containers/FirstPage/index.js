import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import ParagraphText from '../../components/ParagraphText';
import FooterButtons from "../../components/FooterButtons";
import { PAGE_2 } from "../../routeConstants";
import { PAGE_1_CONTENT_TEXT } from '../constants';
import { Page1Background as image, Page1Logo as logo } from "../../ui/Background";

const PageWrapper = styled.div`
  background-image: url(${image});
  text-align: center;
`

const ContentWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`

const ImageWrapper = styled.div`
  max-width: 9rem;
  margin: 0 auto;
  > img {
    max-width: 100%;
  }
`

const contentText = PAGE_1_CONTENT_TEXT;

const FirstPage = props => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageLayout>
          <ImageWrapper><img src={logo} alt="" /></ImageWrapper>
          <ParagraphText
            textArray={contentText}
          />
        </PageLayout>
        <FooterButtons justifyContent="flex-end" labelNext="take the challenge" linkNext={PAGE_2}/>
      </ContentWrapper>
    </PageWrapper>
  )
}

FirstPage.propTypes = {

}

export default FirstPage
