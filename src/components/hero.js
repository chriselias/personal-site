import React from "react"

import styled from "styled-components";
import ContentWrapper from "./contentWrapper";


const HeroWrapper = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  `;

const Title = styled.h2`
    font-size: 64px;
    font-weight: 800;
`;

const Hero = () => (
<ContentWrapper>
  <HeroWrapper>
    <div>
            <Title>Full Stack Developer</Title>
            <p>Currently designing thoughtful experiences at InVision to help designers, product managers and engineers collaborate better together.</p>
    </div>
  </HeroWrapper>
    </ContentWrapper>
)


export default Hero