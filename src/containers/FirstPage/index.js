import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import ParagraphText from '../../components/ParagraphText';
import FooterButtons from "../../components/FooterButtons";
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

const contentText = PAGE_1_CONTENT_TEXT;

const FirstPage = props => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <PageLayout
          image={logo}
        >
          <ParagraphText
            textArray={contentText}
          />
        </PageLayout>
        <FooterButtons justifyContent="flex-end" labelNext="take the challenge" linkNext="/1"/>
      </ContentWrapper>
    </PageWrapper>
  )
}

FirstPage.propTypes = {

}

export default FirstPage
