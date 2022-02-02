import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import ContentWrapper from "./contentWrapper"

const HeroWrapper = styled.div`
  min-height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const Title = styled.h2`
  font-size: 64px;
  font-weight: 800;
`

const StyledImage = styled.div`
  justify-self: end;
  padding: 2rem;
`

const Hero = () => (
  <ContentWrapper>
    <HeroWrapper>
      <div>
        <Title>Full Stack Developer</Title>
        <p>
          Currently designing thoughtful experiences at InVision to help
          designers, product managers and engineers collaborate better together.
        </p>
      </div>
      <StyledImage>
        <StaticImage
     src="../images/chris-elias.png"
     alt="Chris Elias"
     placeholder="blurred"
     width={400}
   />
      </StyledImage>
    </HeroWrapper>
  </ContentWrapper>
)

export default Hero
