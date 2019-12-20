import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ContentWrapper from './contentWrapper';
import ProjectCard from './projectCard';
import styled from 'styled-components';
import SubHeading from "./subHeading";

const ProjectGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
`

const PROJECT_ARCHIVE_QUERY = graphql`
        query RecentProjectQuery {
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
              cover,
              images {
                publicURL
              }
            }
          }
        }
      }
    }
  `
const ProjectList = () => {
    const data = useStaticQuery(PROJECT_ARCHIVE_QUERY)

    return (
        <ContentWrapper>        
            <SubHeading>Recent Work</SubHeading>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis magni odit excepturi provident! Velit, laborum iusto, molestiae id explicabo blanditiis voluptatibus quia exercitationem, error enim quo necessitatibus distinctio suscipit ducimus.</p>
            <ProjectGrid>
            { data.allMarkdownRemark.edges.map(edge => (
                <Link key={edge.node.frontmatter.slug} to={`/projects${edge.node.frontmatter.slug}`}>
        
            <ProjectCard project={edge} />
        </Link>
               /* <li key={edge.node.frontmatter.slug}>
                <Link to={`/projects${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li> */
           
            ))}
            </ProjectGrid>
        </ContentWrapper>
    )
}

export default ProjectList