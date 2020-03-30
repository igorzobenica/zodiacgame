import React from "react";
import styled from "styled-components";
import { Typo, Page } from "../../ui";
import {
  PAGE_10_CONTENT_TEXT_1,
  PAGE_10_CONTENT_TEXT_2,
  PAGE_10_CONTENT_TEXT_3,
  PAGE_10_CONTENT_TEXT_4,
  PAGE_10_CONTENT_TEXT_5,
  PAGE_10_CONTENT_TEXT_6,
} from "../constants";
import { Page9Background as image } from "../../ui/Background";

const PageWrapper = styled.div`
  background-image: url(${image});
`;

const NinthPage = props => {
  return (
    <PageWrapper>
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
