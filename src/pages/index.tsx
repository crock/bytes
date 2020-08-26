import React from 'react'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import ProjectList from '../components/ProjectList'
import JobList from '../components/JobList'
import EducationList from '../components/EducationList'
import Layout from '../layouts/index'

import '../styles/styles.css'

const IndexPage = () => {
  

  return (
    <Layout>
      <SEO title="Curriculum Vitae" description="For business inquiries or employment opportunies, reach out to Alex on Twitter or by email." />

      <section id="about">
          <h2>About Me</h2>
          <p>Hey there, I am a highly-skilled full stack web developer with a focus on building fully responsive front-end experiences with the JAMstack. However, I have proven work experience in various other tech stacks.</p>
          <p>I am currently seeking a full-time position in the greater Orlando area, but I am willing to re-locate for the right opportunity.</p>
          <p>You can get in touch with me via email for job opportunities at <a href="mailto:alexcrocker@me.com">alexcrocker@me.com</a></p>
      </section>

      <section id="employment">
            <h2>Employment History</h2>
            <JobList />
        </section>
        
        <section id="projects">
            <h2>Personal Projects</h2>
            <ProjectList />
        </section>

        <section id="education">
            <h2>Education</h2>
            <EducationList />
        </section>

        <section id="blog">
          <h2>Blog Posts</h2>
          <PostList />
        </section>
    </Layout>
  )
}

export default IndexPage
