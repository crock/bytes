import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import ProjectList from '../components/ProjectList'
import JobList from '../components/JobList'
import EducationList from '../components/EducationList'

const ResumePage = () => {

  return (
    <>
      <SEO title="Alex Crocker CV" description="Alex is a passionate full-stack developer a diverse skillset." />
      <Link id="goback" to="/" style={{textDecoration: 'none', position: 'fixed', top: 0, left: 0, padding: '15px 25px'}}><span role="img" aria-label="finger pointing left" style={{marginRight: 5}}>👈</span> Go Back</Link>
        <h1>Alex Crocker</h1>
        <p>Hey there, I am a highly-skilled full stack web developer with a focus on building fully responsive front-end experiences with the JAMstack. However, I have proven work experience in various other tech stacks.</p>
        <p>I am currently seeking a full-time position in the greater Orlando area, but I am willing to re-locate for the right opportunity.</p>
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
    </>
  )
}

export default ResumePage
