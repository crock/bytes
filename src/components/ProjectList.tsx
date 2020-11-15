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
          dates
          title
          subtitle
          url
          skills
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
        <>
            {projects.map(project => (
              <div key={project.id} className="mb-4 p-6 border-gray-500 border border-solid relative">
              <h3 className="text-xl font-bold">{project.frontmatter.title}</h3>
              <div className="text-lg font-light">{project.frontmatter.subtitle}</div>
              <div className="text-sm font-semibold">{project.frontmatter.dates}</div>
              <p className="text-base font-normal py-4" dangerouslySetInnerHTML={{__html: project.html}}></p>
              <div>
                <h4 className="text-base font-bold">Skills:</h4>
                <ul className="list-inside list-disc">
                  {project.frontmatter.skills ? project.frontmatter.skills.split(',').map(skill => {
                    return <li>{skill}</li>
                  }) : null}
                </ul>
              </div>
              { project.frontmatter.ongoing ? <div className="py-2 px-4 bg-green-600 w-24 h-10 text-center text-white rounded absolute top-0 right-0 mr-3 mt-3">Active</div> : null }
              <a href={project.frontmatter.url} className="block mt-8 text-green-800">
                <div className="block print:hidden">Website</div>
                <div className="hidden print:block">{project.frontmatter.url}</div>
              </a>
            </div>
            ))}
          </>
    )
}

export default ProjectList