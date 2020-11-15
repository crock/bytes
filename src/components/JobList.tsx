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
          subtitle
          url
          skills
          dates
          ongoing
        }
      }
    }
  }
}
`)

  const jobs = jobData.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <>
            {jobs.map(job => (
              <div key={job.id} className="mb-4 p-6 border-gray-500 border border-solid relative">
                <h3 className="text-xl font-bold">{job.frontmatter.title}</h3>
                <div className="text-lg font-light">{job.frontmatter.subtitle}</div>
                <div className="text-sm font-semibold">{job.frontmatter.dates}</div>
                <p className="text-base font-normal py-4" dangerouslySetInnerHTML={{__html: job.html}}></p>
                <div>
                  <h4 className="text-base font-bold">Skills:</h4>
                  <ul className="list-inside list-disc">
                    {job.frontmatter.skills ? job.frontmatter.skills.split(',').map(skill => {
                      return <li>{skill}</li>
                    }) : null}
                  </ul>
                </div>
                { job.frontmatter.ongoing ? <div className="py-2 px-4 bg-green-600 w-24 h-10 text-center text-white rounded absolute top-0 right-0 mr-3 mt-3">Active</div> : null }
                <a href={job.frontmatter.url} className="block mt-8 text-green-800">
                  <div className="block print:hidden">Website</div>
                  <div className="hidden print:block">{job.frontmatter.url}</div>
                </a>
              </div>
            ))}
        </>
    )
}

export default JobList