import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'

const JobList = () => {
    const jobData = useStaticQuery(graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "job"}}}) {
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

  const jobs = jobData.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <ul style={{listStyleType: 'none'}}>
            {jobs.map(job => (
              <li key={job.id}>
                <h3>{job.frontmatter.title}</h3>
                <dl>
                    <dt>Start Date</dt>
                    <dd>{moment(job.frontmatter.date, 'YYYY-MM-DD').format('MMMM YYYY').toString()} ({`${job.frontmatter.termInMonths} months`})</dd>

                    <dt>Tech Stack</dt>
                    <dd>{job.frontmatter.techStack}</dd>
                </dl>
                <div className="flex flex-row">
                  { job.frontmatter.website ? <a style={{marginRight: 15}} href={job.frontmatter.website} target="_blank" rel="noopener">View Website</a> : null }
                  { job.frontmatter.repo ? <a href={job.frontmatter.repo} target="_blank" rel="noopener">View Repository</a> : null }
                </div>
              </li>
            ))}
          </ul>
    )
}

export default JobList