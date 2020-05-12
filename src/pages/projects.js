import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import { useStaticQuery, graphql, Link } from 'gatsby';
import ProjectCard from '../components/projectCard';
import styled from 'styled-components';
import SubHeading from "../components/subHeading"

const ProjectGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
`

const PROJECT_ARCHIVE_QUERY = graphql`
  query ProjectPageQuery {
      allMarkdownRemark(sort: {
    order:DESC,
    fields: [frontmatter___date]
  })  {
        edges {
          node {
            frontmatter {
              slug,
              title,
              color,
              images {
                publicURL
              }
            }
          }
        }
      }
    }`


const ProjectsPage = () => {

    const data = useStaticQuery(PROJECT_ARCHIVE_QUERY)

    return (

        <Layout>
            <SEO title="Chris Elias' Projects" />
            <ContentWrapper>
                <SubHeading>Recent Projects</SubHeading>
          <p>Here are a few recent projects and applications. Email me to see more.</p>
                <ProjectGrid>
                    {data.allMarkdownRemark.edges.map(edge => (
                        <Link key={edge.node.frontmatter.slug} to={`/projects${edge.node.frontmatter.slug}`}>

                            <ProjectCard project={edge} />
                        </Link>

                    ))}
                </ProjectGrid>
        </ContentWrapper>
                
    </Layout>
            )}
            
            export default ProjectsPage
