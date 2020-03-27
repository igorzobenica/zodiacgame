import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../components/PageLayout';
import FooterButtons from "../../components/FooterButtons";
import { PAGE_5_CONTENT_TEXT } from '../constants';
import CharInputFields from '../../components/CharInputFields';
import styled from 'styled-components';
import { Page5Background as image, Page5Table as tableImage, Page5AudioIcon as audioIcon } from "../../ui/Background";
import {MEDIA_MEDIUM} from "../../ui/theme/tokens/breakpoints";
import { AudioModulated } from "../../ui/Background/audio";

const PageWrapper = styled.div`
  background-image: url(${image});
  min-height: 100vh;
  @media (min-width: ${MEDIA_MEDIUM}px) {
    display: flex;
  }
`
const ImageWrapper = styled.div`
  > div {
    > img {
      max-width: 100%;
    }
    &:last-child {
      display: flex;
      justify-content: center;
      > img {
        width: 5rem;
        &:hover {
          transform: scale(0.9);
          cursor: pointer;
        }
      }
    }
  }
`;

const contentText = PAGE_5_CONTENT_TEXT;

const correctAnswers = ['340'];

const FifthPage = ({history}) => {
  const [validationError, setValidationError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [playing, setPlaying] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());
  const onClick = () => {
    if (isCorrect) {
      history.push("/5");
    } else {
      setValidationError('wrong!');
    }
  };
  const onClickPlay = () => {
    setPlaying(true);
  };
  return (
    <PageWrapper>
      <div>
        <PageLayout
          text={contentText}
          videoUrl={AudioModulated}
          playing={playing}
        >
          <CharInputFields
            inputValues={[inputValue[0] || '',inputValue[1] || '',inputValue[2] || '']}
            setInputValue={setInputValue}
            validationError={validationError}
          />
        </PageLayout>
        <FooterButtons linkBack="/3" onClick={onClick} isDisabled={!inputValue}/>
      </div>
      <ImageWrapper>
        <div>
          <img src={tableImage} alt="" />
        </div>
        <div>
          <img src={audioIcon} alt="" onClick={onClickPlay}/>
        </div>
      </ImageWrapper>
    </PageWrapper>
  )
}

FifthPage.propTypes = {

}

export default FifthPage
