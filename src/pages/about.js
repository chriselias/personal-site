import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import SubHeading from "../components/subHeading"
import styled from "styled-components"

const Content = styled.main`
    min-height: calc(100vh - 200px);
`;

const AboutPage = () => (
    <Layout>
        <SEO title="About Chris Elias" />
        <ContentWrapper>
        <Content>
        <SubHeading>About Me</SubHeading>

       <p>
        Hi, I’m Chris Elias a full stack web developer and UI designer from Chicago. I’ve been developing and designing beautiful and usable websites and apps for over a decade. I’m co-fouder of My Local Beacon where I love building scalable responsive sites and slick javascript applications to help businesses manage their online marketing. Feel free to reach out if you want to hire me or discuss an opportunity.
       </p>
        
        <p>
            I have had the lucky opportunity to experience many roles and projects throughout my career. I have been a Front-end Developer, a UI Designer, and a Product Manager. I have typically worked for small companies and start ups, which allowed me to be part of all aspects of the business. I have lead technical teams, managed support teams, and oversaw the launch of several products from idea to market. I have years of CMS experience with Wordpress and I even developed a custom platform that hosted 30k+ websites. 
        </p>
    
        <p>
             My current focus is javascript and all of the great features and advantages it brings to modern web and app development. I love React, Node, and Angular which I have built many production apps for both web and iOS/android. Mixed with the new CSS features, I am really excited about the current state of the web and I can’t wait to see where it goes in the next few years.</p>
       <p>
       When I’m not coding or watching the Cubs, I enjoy cooking with my lovely wife Sara, sipping a good whiskey, dominating in my fantasy football leagues, and building a quality mechanical keyboard. 
        </p>
    
            </Content>
   
        </ContentWrapper>
    </Layout>
)

export default AboutPage
