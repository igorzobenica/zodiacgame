import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Page, Typo } from "../../ui";

const PlayerWrapper = styled.div`
  margin: 0 auto;
    max-width: 560px;
    height: ${({showVideo}) => showVideo && '315px'};
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
`;

const PageLayout = ({
  children,
  text,
  videoUrl,
  showVideo,
  image,
  playing,
}) => {
  return (
    <Page>
      {text && <TextWrapper><Typo.p>{text}</Typo.p></TextWrapper>}
      {videoUrl && <PlayerWrapper showVideo={showVideo}><ReactPlayer url={videoUrl} playing={playing} controls={true} width='100%' height='100%'/></PlayerWrapper>}
      {image && <ImageWrapper><img src={image} alt="" /></ImageWrapper>}
      {children}
    </Page>
  );
};

PageLayout.propTypes = {};

export default PageLayout;
