import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import FooterButtons from "../../components/FooterButtons";
import { Page2Background as image } from "../../ui/Background";
import { PAGE_1, PAGE_3 } from "../../routeConstants";
import { PAGE_2_CONTENT_TEXT } from '../constants';
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";

const contentText = PAGE_2_CONTENT_TEXT;

const PageWrapper = styled.div`
  background-image: url(${image});
  display: flex;
  @media (max-width: ${MEDIA_SMALL}px) {
    background-position: unset !important;
  }
  > div:last-child {
      width: 25%;
      @media (max-width: ${MEDIA_SMALL}px) {
        width: 0;
      }
  }
`;

const SecondPage = props => {
  return (
    <PageWrapper>
      <div>
        <PageLayout
          text={contentText}
          videoUrl="https://www.youtube.com/watch?v=TBHao86kvhA"
          controls={true}
        />
        <FooterButtons linkBack={PAGE_1} labelNext="next" linkNext={PAGE_3}/>
      </div>
      <div></div>
    </PageWrapper>
  )
}

SecondPage.propTypes = {

}

export default SecondPage
