import React, { useState } from 'react';
import parse from 'html-react-parser';
import FooterButtons from "../../components/FooterButtons";
import { PAGE_8_CONTENT_TEXT1, PAGE_8_CONTENT_TEXT } from '../constants';
import CharInputFields from '../../components/CharInputFields';
import styled from 'styled-components';
import { Page8Background as image, Page8Rebus as imageRebus } from "../../ui/Background";
import { Typo } from '../../ui';
import { PAGE_7, PAGE_9 } from '../../routeConstants';

const PageWrapper = styled.div`
  background-image: url(${image});
`

const LargeTextWrapper = styled.div`
  margin: 5rem 3rem;
  white-space: pre-wrap;
`;

const TextWrapper = styled.div`
  margin-bottom: 3rem;
  white-space: pre-wrap;
  span {
    text-decoration: underline;
  }
`;

const ImageWrapper = styled.div`
  max-width: 30rem;
  margin: 3rem auto;
  > img {
    max-width: 100%;
  }
`;

const contentText = PAGE_8_CONTENT_TEXT;
const contentText1 = PAGE_8_CONTENT_TEXT1;

const correctAnswers = ['kgo'];

const EighthPage = ({history}) => {
  const [validationError, setValidationError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());
  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_9);
    } else {
      setValidationError('wrong!');
    }
  };
  return (
    <PageWrapper>
        <LargeTextWrapper>
          <TextWrapper><Typo.p>{parse(contentText)}</Typo.p></TextWrapper>
          <ImageWrapper><img src={imageRebus} alt="" /></ImageWrapper>
          <TextWrapper><Typo.p>{contentText1}</Typo.p></TextWrapper>
          <CharInputFields
            inputValues={[inputValue[0] || '',inputValue[1] || '',inputValue[2] || '']}
            setInputValue={setInputValue}
            validationError={validationError}
          />
        </LargeTextWrapper>
        <FooterButtons linkBack={PAGE_7} onClick={onClick} isDisabled={!inputValue}/>
    </PageWrapper>
  )
}

export default EighthPage
