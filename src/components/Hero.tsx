import React from "react";
import styled from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

/* 1140px is the --ifm-container-width */
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.div`
  width: 160px;
  height: 160px;
  margin-right: auto;
`;

const Headline = styled.div`
  font-size: 46px;
  font-weight: 600;
  margin-top: 36px;
  margin-bottom: 12px;
`;

const Body = styled.div`
  font-size: 24px;
`;

/* <h1 className="hero__title">Build apps for people you care about</h1>
          <p className="hero__subtitle">
            You can build collaborative applications for your friends, family, or customers.
            These applications can work together with other computing devices — from smart home to factory automation.
            And you can do all of this <i>without using the cloud</i>.
          </p> */
export const Hero: React.FC = () => (
  <Wrapper>
    <Logo>
      <img
        src={useBaseUrl("static/img/lfcc-logo-negative.svg")}
        alt="lfcc-logo"
        width="100%"
      />
    </Logo>
    <Headline>Build apps for people you care about</Headline>
    <Body>
      You can build collaborative applications for your friends, family, or
      customers. These applications can work together with other computing
      devices — from smart home to factory automation. And you can do all of
      this <i>without using the cloud</i>
    </Body>
  </Wrapper>
);
