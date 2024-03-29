import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import FooterButtons from "../../components/FooterButtons";
import CharInputFields from "../../components/CharInputFields";
import styled from "styled-components";
import HintModal from "../../components/HintsModal";
import {
  Page1Background as image,
  Page1BackgroundSmall as imageSmall,
  Page5Table as tableImage,
  Page5AudioIcon as audioIcon
} from "../../ui/Background";
import ReactPlayer from "react-player";
import { IconWithLabel, Typo } from "../../ui";
import { loadImage } from "../../helpers/loadImage";
import { MEDIA_MEDIUM } from "../../ui/theme/tokens/breakpoints";
import { AudioModulated } from "../../ui/Background/audio";
import { PAGE_4, PAGE_6 } from "../../routeConstants";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
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

const correctAnswers = ["340"];

const FifthPage = ({ history }) => {
  const { t } = useTranslation();
  const [validationError, setValidationError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [player, setPlayer] = useState();
  const [playing, setPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const isCorrect = correctAnswers.includes(inputValue.toLowerCase());
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  const onClick = () => {
    if (isCorrect) {
      history.push(PAGE_6);
    } else {
      setValidationError(t('common.wrong'));
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
    <PageWrapper isImgLoaded={isImgLoaded}>
      <ContentWrapper>
        <div>
          <TextWrapper><Typo.P>{t('p5.main')}</Typo.P></TextWrapper>
        </div>
        <ImageWrapper>
          <div>
            <img src={tableImage} alt="" />
            <img src={tableImage} alt="" />
            <img src={tableImage} alt="" />
          </div>
          <IconWithLabel onClick={onClickPlay} image={audioIcon} text={t('common.play_sound')}/>
        </ImageWrapper>
      </ContentWrapper>
      <HintModal show={showModal} text={t('p5.hint')} setShowModal={setShowModal}/>
        <PlayerWrapper hideVideo={true}><ReactPlayer url={AudioModulated} playing={playing} onEnded={onEnded} ref={component => setPlayer && (setPlayer(component))} controls={false} width='100%' height='100%'/></PlayerWrapper>
          <CharInputFields
            inputValues={[
              inputValue[0] || "",
              inputValue[1] || "",
              inputValue[2] || ""
            ]}
            setInputValue={setInputValue}
            validationError={validationError}
            setValidationError={setValidationError}
            onEnter={inputValue.length === 3 && onClick}
          />
        <FooterButtons
          linkBack={PAGE_4}
          onClick={onClick}
          isDisabled={inputValue.length !== 3}
          onClickHint={onClickHint}
        />
    </PageWrapper>
  );
};

FifthPage.propTypes = {};

export default FifthPage;
