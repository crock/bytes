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
          date
          title
          website
          degree
          major
        }
      }
    }
  }
}
`)

  const schools = educationData.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <ul style={{listStyleType: 'none'}}>
            {schools.map(education => (
              <li key={education.id}>
                <h3>{education.frontmatter.title}</h3>
                <dl>
                    <dt>Graduation Date</dt>
                    <dd>{moment(education.frontmatter.date, 'YYYY-MM-DD').format('MMMM YYYY').toString()}</dd>

                    <dt>Degree</dt>
                    <dd>{education.frontmatter.degree}</dd>

                    <dt>Major / Focus</dt>
                    <dd>{education.frontmatter.major}</dd>
                </dl>
                <HStack>
                  { education.frontmatter.website ? <a href={education.frontmatter.website} target="_blank" rel="noopener">View Site</a> : null }
                </HStack>
              </li>
            ))}
        </ul>
    )
}

export default EducationList