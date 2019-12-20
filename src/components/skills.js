import React from "react"
import styled from "styled-components";
import ContentWrapper from './contentWrapper';
import SubHeading from "./subHeading";


const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
  padding: 4rem 0;
  `;

const Skills = () => (
    <ContentWrapper bg="#F4F4F4">
  <SkillsWrapper>
    <div>
        <SubHeading>Code and Design</SubHeading>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quos omnis explicabo quod animi saepe officiis sapiente eius quidem quas nisi dolor impedit quasi, eos culpa adipisci distinctio natus reiciendis?</p>
    </div>
    <div>
        <h3>Front End</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores fugit aspernatur consequuntur laborum alias sint totam tenetur aperiam ea, rem quidem nesciunt, dolores adipisci odio ab dicta aliquid aliquam!</p>

        <h3>Back End</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores fugit aspernatur consequuntur laborum alias sint totam tenetur aperiam ea, rem quidem nesciunt, dolores adipisci odio ab dicta aliquid aliquam!</p>

        <h3>Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores fugit aspernatur consequuntur laborum alias sint totam tenetur aperiam ea, rem quidem nesciunt, dolores adipisci odio ab dicta aliquid aliquam!</p>
    </div>
    
  </SkillsWrapper>
    </ContentWrapper>
)


export default Skills