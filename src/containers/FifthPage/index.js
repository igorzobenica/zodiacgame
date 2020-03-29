import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../components/PageLayout";
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
import { IconWithLabel } from "../../ui";
import { MEDIA_MEDIUM } from "../../ui/theme/tokens/breakpoints";
import { AudioModulated } from "../../ui/Background/audio";
import { PAGE_4, PAGE_6 } from "../../routeConstants";

const PageWrapper = styled.div`
  background-image: url(${image});
  min-height: 100vh;
  @media (min-width: ${MEDIA_MEDIUM}px) {
    display: flex;
  }
`;
const ImageWrapper = styled.div`
  > div {
    > img {
      max-width: 100%;
    }
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
    if (!playing) {
      setPlaying(true);
    }
  };
  const onClickHint = () => {
    setShowModal(true);
  };
  return (
    <PageWrapper>
      <div>
        <PageLayout
          text={contentText}
          videoUrl={AudioModulated}
          hideVideo={true}
          setPlayer={setPlayer}
          playing={playing}
          controls={false}
        >
          <CharInputFields
            inputValues={[
              inputValue[0] || "",
              inputValue[1] || "",
              inputValue[2] || ""
            ]}
            setInputValue={setInputValue}
            validationError={validationError}
          />
        </PageLayout>
        <FooterButtons
          linkBack={PAGE_4}
          onClick={onClick}
          isDisabled={!inputValue}
          onClickHint={onClickHint}
        />
      </div>
      <ImageWrapper>
        <div>
          <img src={tableImage} alt="" />
        </div>
        <IconWithLabel onClick={onClickPlay} image={audioIcon} text="play sound"/>
      </ImageWrapper>
      <HintModal show={showModal} text={hintText} setShowModal={setShowModal}/>
    </PageWrapper>
  );
};

FifthPage.propTypes = {};

export default FifthPage;
