import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'
import JobList from '../components/JobList'
import EducationList from '../components/EducationList'
import Wrapper from '../components/Wrapper'
import Helmet from 'react-helmet'

const ResumePage = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                description
                author
              }
            }
          }
        `
      )
    
      const title = "Alex Crocker CV"
      const metaDescription = site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
            lang: 'en',
        }}
        title={title}
        meta={[
            {
            name: `description`,
            content: metaDescription,
            },
            {
            property: `og:title`,
            content: title,
            },
            {
            property: `og:description`,
            content: metaDescription,
            },
            {
            property: `og:type`,
            content: `website`,
            },
            {
            name: `twitter:card`,
            content: `summary`,
            },
            {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
            },
            {
            name: `twitter:title`,
            content: title,
            },
            {
            name: `twitter:description`,
            content: metaDescription,
            },
        ]}
        />
        <Link to="/" style={{textDecoration: 'none', position: 'fixed', top: 0, left: 0, padding: '15px 25px'}}><span role="img" aria-label="finger pointing left" style={{marginRight: 5}}>👈</span> Go Back</Link>
      <Wrapper>
        <h1>Alex Crocker</h1>
        <p>Hey there, I am a highly-skilled full stack web developer with a focus on building fully responsive front-end experiences with the JAMstack. However, I have proven work experience in various other tech stacks.</p>
        <p>I am currently seeking a full-time position in the greater Orlando area, but I am open to re-locating for an amazing opportunity in the "Silicon Valley" area.</p>
        <p>You can get in touch with me via email for job opportunities at <a href="mailto:alexcrocker@me.com">alexcrocker@me.com</a></p>

        <section>
            <h2>Employment History</h2>
            <JobList />
        </section>
        
        <section>
            <h2>Personal Projects</h2>
            <ProjectList />
        </section>

        <section>
            <h2>Education</h2>
            <EducationList />
        </section>
      </Wrapper>
    </>
  )
}

export default ResumePage
