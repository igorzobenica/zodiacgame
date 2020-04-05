import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout';
import FooterButtons from "../../components/FooterButtons";
import { Page2Background as image, Page2BackgroundSmall as imageSmall } from "../../ui/Background";
import { PAGE_1, PAGE_3 } from "../../routeConstants";
import { PAGE_2_CONTENT_TEXT } from '../constants';
import { MEDIA_SMALL } from "../../ui/theme/tokens/breakpoints";
import { loadImage } from '../../helpers/loadImage';

const contentText = PAGE_2_CONTENT_TEXT;

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
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
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
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
