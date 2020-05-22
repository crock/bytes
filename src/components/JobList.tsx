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
        <ul>
            {jobs.map(job => (
              <li key={job.id} className="article-list-item">
                <h3>{job.frontmatter.title}</h3>
                <time dateTime={job.frontmatter.date}>{moment(job.frontmatter.date, 'YYYY-MM-DD').format('MMMM DD, YYYY').toString()} ({`${job.frontmatter.termInMonths} months`})</time>
            <p style={{margin: 0}}><strong>Tech Stack: </strong>{job.frontmatter.techStack}</p>
                <div className="flex flex-row">
                  { job.frontmatter.website ? <a className="mr-2" href={job.frontmatter.website} target="_blank" rel="noopener">View Website</a> : null }
                  { job.frontmatter.repo ? <a href={job.frontmatter.repo} target="_blank" rel="noopener">View Repository</a> : null }
                </div>
              </li>
            ))}
          </ul>
    )
}

export default JobList