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
          ongoing
        }
      }
    }
  }
}
`)

  const projects = projectData.allMarkdownRemark.edges.map(edge => edge.node)

  const calculateMonthsActive = props => {
    const {termInMonths, date, ongoing} = props
    const startDate = moment(date)
    const numMonths = termInMonths || moment().diff(startDate, 'months')

    return !ongoing ? `(${numMonths} months)` : null
  }

    return (
        <ul style={{listStyleType: 'none'}}>
            {projects.map(project => (
              <li key={project.id}>
                <h3>{project.frontmatter.title}</h3>
                <dl>
                    <dt>Start Date</dt>
                    <dd>{moment(project.frontmatter.date, 'YYYY-MM-DD').format('MMMM YYYY').toString()} {calculateMonthsActive(project.frontmatter)}</dd>

                    <dt>Tech Stack</dt>
                    <dd>{project.frontmatter.techStack}</dd>
                </dl>
                <div className="flex flex-row">
                  { project.frontmatter.website ? <a style={{marginRight: 15}} href={project.frontmatter.website} target="_blank" rel="noopener" className="no-print">View Project</a> : null }
                  { project.frontmatter.repo ? <a href={project.frontmatter.repo} target="_blank" rel="noopener" className="no-print">View Repository</a> : null }
                </div>
              </li>
            ))}
          </ul>
    )
}

export default ProjectList