import React from "react";
import parse from 'html-react-parser';
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Page, Typo } from "../../ui";

const PlayerWrapper = styled.div`
  margin: 0 auto;
    max-width: 560px;
    height: 315px;
    display: ${({hideVideo}) => hideVideo && 'none'};
`;

const ImageWrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  > img {
    max-width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin-left: 3rem;
  margin-bottom: 4rem;
  white-space: pre-wrap;
  span {
    text-decoration: underline;
  }
`;

const PageLayout = ({
  children,
  text,
  videoUrl,
  hideVideo,
  image,
  setPlayer,
  playing,
  controls,
}) => {
  return (
    <Page>
      {text && <TextWrapper><Typo.P>{parse(text)}</Typo.P></TextWrapper>}
      {videoUrl && <PlayerWrapper hideVideo={hideVideo}><ReactPlayer url={videoUrl} playing={playing} ref={component => setPlayer && (setPlayer(component))} controls={controls} width='100%' height='100%'/></PlayerWrapper>}
      {image && <ImageWrapper><img src={image} alt="" /></ImageWrapper>}
      {children}
    </Page>
  );
};

export default PageLayout;
