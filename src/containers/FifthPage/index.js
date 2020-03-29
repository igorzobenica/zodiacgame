import React, { useState } from "react";
import FooterButtons from "../../components/FooterButtons";
import { PAGE_5_CONTENT_TEXT, PAGE_5_HINT_TEXT } from "../constants";
import CharInputFields from "../../components/CharInputFields";
import styled from "styled-components";
import HintModal from "../../components/HintsModal";
import {
  Page5Background as image,
  Page5Table as tableImage,
  Page5AudioIcon as audioIcon
} from "../../ui/Background";
import ReactPlayer from "react-player";
import { IconWithLabel, Typo } from "../../ui";
import { MEDIA_MEDIUM } from "../../ui/theme/tokens/breakpoints";
import { AudioModulated } from "../../ui/Background/audio";
import { PAGE_4, PAGE_6 } from "../../routeConstants";

const PageWrapper = styled.div`
  background-image: url(${image});
  min-height: 100vh;
`;
const ContentWrapper = styled.div`
  margin-bottom: 3rem;
  @media (min-width: ${MEDIA_MEDIUM}px) {
    margin-bottom: 0;
  }
`;
const ImageWrapper = styled.div`
  text-align: center;
  > div {
    &:first-child {
      @media (min-width: ${MEDIA_MEDIUM}px) {
        display: flex;
        justify-content: space-evenly;
      }
    }
    > img {
      max-width: 10rem;
      max-height: 15rem;
    }
  }
`;
const PlayerWrapper = styled.div`
  margin: 0 auto;
    max-width: 560px;
    height: 315px;
    display: ${({hideVideo}) => hideVideo && 'none'};
`;
const TextWrapper = styled.div`
  margin: 4rem 4rem 1.5rem;
  white-space: pre-wrap;
  span {
    text-decoration: underline;
  }
`;

const hintText = PAGE_5_HINT_TEXT;
const contentText = PAGE_5_CONTENT_TEXT;

const correctAnswers = ["340"];

const FifthPage = ({ history }) => {
  const [validationError, setValidationError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [player, setPlayer] = useState();
  const [playing, setPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());
  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_6);
    } else {
      setValidationError("wrong!");
    }
  };
  const onClickPlay = () => {
    player && player.seekTo(0, "seconds");
    setPlaying(true);
  };
  const onEnded = () => {
    setPlaying(false);
  };
  const onClickHint = () => {
    setShowModal(true);
  };
  return (
    <PageWrapper>
      <ContentWrapper>
        <div>
          <TextWrapper><Typo.p>{contentText}</Typo.p></TextWrapper>
        </div>
        <ImageWrapper>
          <div>
            <img src={tableImage} alt="" />
            <img src={tableImage} alt="" />
            <img src={tableImage} alt="" />
          </div>
          <IconWithLabel onClick={onClickPlay} image={audioIcon} text="play sound"/>
        </ImageWrapper>
      </ContentWrapper>
      <HintModal show={showModal} text={hintText} setShowModal={setShowModal}/>
        <PlayerWrapper hideVideo={true}><ReactPlayer url={AudioModulated} playing={playing} onEnded={onEnded} ref={component => setPlayer && (setPlayer(component))} controls={false} width='100%' height='100%'/></PlayerWrapper>
          <CharInputFields
            inputValues={[
              inputValue[0] || "",
              inputValue[1] || "",
              inputValue[2] || ""
            ]}
            setInputValue={setInputValue}
            validationError={validationError}
          />
        <FooterButtons
          linkBack={PAGE_4}
          onClick={onClick}
          isDisabled={!inputValue}
          onClickHint={onClickHint}
        />
    </PageWrapper>
  );
};

FifthPage.propTypes = {};

export default FifthPage;
