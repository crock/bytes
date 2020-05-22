import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ProjectList = () => {
    const projectData = useStaticQuery(graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          website
          techStack
          termInMonths
        }
      }
    }
  }
}
`)

  const projects = projectData.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <ul>
            {projects.map(project => (
              <li key={project.id} className="article-list-item">
                <h3>{project.frontmatter.title}</h3>
                <time dateTime={project.frontmatter.date}>{project.frontmatter.date} {`(${project.frontmatter.termInMonths} months)`}</time>
                <p style={{margin: 0}}><strong>Tech Stack: </strong>{project.frontmatter.techStack}</p>
                <a href={project.frontmatter.website} target="_blank" rel="noopener">
                  View Project
                </a>
              </li>
            ))}
          </ul>
    )
}

export default ProjectList