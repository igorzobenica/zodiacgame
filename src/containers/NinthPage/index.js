import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typo, Page } from "../../ui";
import {
  PAGE_10_CONTENT_TEXT_1,
  PAGE_10_CONTENT_TEXT_2,
  PAGE_10_CONTENT_TEXT_3,
  PAGE_10_CONTENT_TEXT_4,
  PAGE_10_CONTENT_TEXT_5,
  PAGE_10_CONTENT_TEXT_6
} from "../constants";
import { Page1Background as image, Page1BackgroundSmall as imageSmall } from "../../ui/Background";
import { loadImage } from "../../helpers/loadImage";

const PageWrapper = styled.div`
  background-image: url(${props => props.isImgLoaded ? image : imageSmall});
`;

const NinthPage = props => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  useEffect(() => {
    loadImage(image, setIsImgLoaded);
  }, []);
  return (
    <PageWrapper isImgLoaded={isImgLoaded}>
      <Page>
        <Typo.p>{PAGE_10_CONTENT_TEXT_1}</Typo.p>
        <Typo.p>{PAGE_10_CONTENT_TEXT_2}</Typo.p>
        <Typo.p>{PAGE_10_CONTENT_TEXT_3}</Typo.p>
        <Typo.p>{PAGE_10_CONTENT_TEXT_4}</Typo.p>
        <Typo.p>{PAGE_10_CONTENT_TEXT_5}</Typo.p>
        <Typo.p>{PAGE_10_CONTENT_TEXT_6}</Typo.p>
      </Page>
    </PageWrapper>
  );
};

export default NinthPage;
