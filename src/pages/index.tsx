import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import ProjectList from '../components/ProjectList'
import JobList from '../components/JobList'
import EducationList from '../components/EducationList'
import Layout from '../layouts/index'

const IndexPage = () => {

  useEffect(() => {
    if (window.location.search.length) {
      let qs = window.location.search.slice(1).split('&')
      qs.forEach(param => {
        let parts = param.split('=')
        if (parts[0] === 'dn') {
          navigate('/contact', {
            state: {
              subject: parts[1]
            }
          })
        }
      })
    }
  }, [])
  

  return (
    <Layout>
      <SEO title="Alexander Crocker - Curriculum Vitae" description="For business inquiries or employment opportunies, reach out to Alex on Twitter or by email." />

      <section id="about" className="mt-4">
          <h2 className="text-4xl font-black mb-3">About Me</h2>
          <p className="font-light text-lg leading-loose">Hey there, I am a highly-skilled full stack web developer with a focus on building fully responsive front-end experiences with the JAMstack. However, I have proven work experience in various other tech stacks.</p>
          <p className="font-light text-lg leading-loose">I am currently seeking a new, full-time position in the greater Orlando area, but I am willing to re-locate for the right opportunity.</p>
          <p className="font-light text-lg leading-loose">You can get in touch with me via email for job opportunities at <a href="mailto:alexcrocker@me.com">alexcrocker@me.com</a></p>
      </section>

      <section id="employment" className="mt-4">
            <h2 className="text-4xl font-black mb-3">Employment History</h2>
            
            <JobList />

        </section>

        <section id="education" className="mt-4">
            <h2 className="text-4xl font-black mb-3">Education</h2>
            
            <EducationList />

        </section>
        
        <section id="projects" className="mt-4">
            <h2 className="text-4xl font-black mb-3">Personal Projects</h2>
            
            <ProjectList />

        </section>

        <section id="blog" className="mt-4">
          <h2 className="text-4xl font-black mb-3">Blog Posts</h2>
          <PostList />
        </section>
    </Layout>
  )
}

export default IndexPage
