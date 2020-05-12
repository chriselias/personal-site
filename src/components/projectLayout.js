import React, { Component } from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import ContentWrapper from './contentWrapper';
import styled  from 'styled-components';


const Cover = styled.section.attrs(props => ({
  bg: props.bg || "transparent"
}))`
    background: ${props => props.bg };
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  `;
const Stack = styled.div.attrs(props => ({ bg: props.bg || "transparent "}))`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default class projectLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        return (
            <Layout>
            <ContentWrapper bg={markdownRemark.frontmatter.secondaryColor}>
              <Cover>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <img src={markdownRemark.frontmatter.images[0].publicURL} />
              </Cover>
            </ContentWrapper>
            
             <ContentWrapper bg='orange'>
              <Stack>
                <h2>Stack Used</h2>
                <div>icons...</div>
              </Stack>
             </ContentWrapper>
              
            <ContentWrapper>
              <Content>
                <div dangerouslySetInnerHTML={{
                  __html: markdownRemark.html
                }} />
              </Content>
             
              </ContentWrapper>
                
            </Layout>
        );
    }
}

export const query = graphql`
  query ProjectQuery($slug: String!)  {
	markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    html,
    frontmatter {
      title,
      date,
      color,
      secondaryColor,
      images {
        publicURL
      }
    }
  } 
 
}

`;