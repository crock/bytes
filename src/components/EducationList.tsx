import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import moment from 'moment'
import HStack from './HStack'

const EducationList = () => {
    const educationData = useStaticQuery(graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "education"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          dates
          title
          subtitle
          position
        }
      }
    }
  }
}
`)

  const schools = educationData.allMarkdownRemark.edges
    .map(edge => edge.node)
    .sort(function(a, b) {
      return a.frontmatter.position - b.frontmatter.position;
    })
    .reverse();

    return (
        <>
            {schools.map(education => (
              <div key={education.id} className="mb-4 p-6 border-gray-500 border border-solid relative">
              <h3 className="text-xl font-bold">{education.frontmatter.title}</h3>
              <div className="text-lg font-light">{education.frontmatter.subtitle}</div>
              <div className="text-sm font-semibold">{education.frontmatter.dates}</div>
              <p className="text-base font-normal py-4" dangerouslySetInnerHTML={{__html: education.html}}></p>
              <a href={education.frontmatter.url} className="block mt-8 text-green-800">
                <div className="block print:hidden">Website</div>
                <div className="hidden print:block">{education.frontmatter.url}</div>
              </a>
            </div>
            ))}
        </>
    )
}

export default EducationList