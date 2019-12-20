
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const PROJECT_ARCHIVE_QUERY = graphql`
    query ProjectArchiveQuery {
      allMarkdownRemark(sort: {
    order:DESC,
    fields: [frontmatter___date]
  })  {
        edges {
          node {
            frontmatter {
              slug,
              title,
            }
          }
        }
      }
    }
  `
const Archive = () => {
    const data = useStaticQuery(PROJECT_ARCHIVE_QUERY)

    return (
        <>        
        <aside>
            <h3>Archive</h3>
            { data.allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/projects${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
        </aside>  
        </>
    )
}

export default Archive