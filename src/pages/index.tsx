import React from 'react'
import SEO from '../components/seo'
import PostList from '../components/PostList'
import { Link } from 'gatsby'
import SocialIcons from '../components/SocialIcons'

const IndexPage = () => {
  

  return (
    <>
      <SEO title="Crocker Bytes | Tech & Design Opinions and Tutorials" description="Where Alex Crocker shares his thoughts on tech and byte-sized tutorials on software development, system administration, and design." />
        <h1>Welcome to Crocker Bytes!</h1>
        <div style={{padding: '1rem 0'}}>
          <div>
            <span role="img" aria-label="crocodile" className="giant-emoji">🐊</span>
            <span role="img" aria-label="waving hand" className="giant-emoji">👋</span>
            <span role="img" aria-label="smile" className="giant-emoji">😊</span>
          </div>
          <em>Don't worry, I don't actually BITE!</em>
        </div>
        <SocialIcons />
        <section>
          <h2>About Me</h2>
          <p>Hi, <strong>my name is Alex</strong>, it's nice to meet you! I am a passionate <strong>full-stack web developer</strong> with countless ideas to make the world a better place through my work. When I'm not <strong>helping my clients fulfill their visions</strong> and <strong>mentoring aspiring young developers</strong> on the <a href="https://devcord.com">Devcord Discord server</a>, I can be found learning new techniques and building new things to further my career. I have a <strong>commitment to lifelong learning</strong>, which is especially important in the tech industry.</p>
          <p><span role="img" aria-label="finger pointing right" style={{marginRight: 15}}>👉</span>If you are a recruiter or want to hire me, <Link to="/cv">click here</Link> for my resumé!</p>
        </section>

        <section>
          <h2>The Blog</h2>
          <PostList />
        </section>
    </>
  )
}

export default IndexPage
