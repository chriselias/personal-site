import React, { Component } from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import ContentWrapper from './contentWrapper';

export default class projectLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;
        return (
            <Layout>
              <ContentWrapper>
              <h1>{markdownRemark.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{
                __html: markdownRemark.html
              }} />
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
      date
    }
  } 
 
}

`;