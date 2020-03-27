import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  
  > div {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 100vh;
    overflow: auto;
  }
`;

const index = ({ children }) => {
  return <Wrapper>{ children }</Wrapper>;
};

export default index;
