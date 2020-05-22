import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'

const ProjectList = () => {
    const projectData = useStaticQuery(graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          date
          title
          website
          repo
          techStack
          termInMonths
        }
      }
    }
  }
}
`)

  const projects = projectData.allMarkdownRemark.edges.map(edge => edge.node)

  const calculateMonthsActive = props => {
    const {termInMonths, date} = props
    const startDate = moment(date)
    const numMonths = termInMonths || moment().diff(startDate, 'months')

    return `(${numMonths} months)`
  }

    return (
        <ul>
            {projects.map(project => (
              <li key={project.id} className="article-list-item">
                <h3>{project.frontmatter.title}</h3>
                <time dateTime={project.frontmatter.date}>{moment(project.frontmatter.date, 'YYYY-MM-DD').format('MMMM DD, YYYY').toString()} {calculateMonthsActive(project.frontmatter)}</time>
            <p style={{margin: 0}}><strong>Tech Stack: </strong>{project.frontmatter.techStack}</p>
                <div className="flex flex-row">
                  { project.frontmatter.website ? <a className="mr-2" href={project.frontmatter.website} target="_blank" rel="noopener">View Project</a> : null }
                  { project.frontmatter.repo ? <a href={project.frontmatter.repo} target="_blank" rel="noopener">View Repository</a> : null }
                </div>
              </li>
            ))}
          </ul>
    )
}

export default ProjectList