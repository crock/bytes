import React, { useState } from 'react'
import SEO from '../components/seo'
import Layout from '../layouts/index'
import ContactForm from '../components/ContactForm'

import '../styles/styles.css'

const ContactPage = ({location}) => {
    const [subject, setSubject] = useState(location.state ? location.state.subject : null)

    const editSubject = (event) => {
        setSubject(event.target.value)
    }

    return (
        <Layout>
          <SEO title="Contact Me" />
              <h2>Contact Me</h2>
              <p>Use the following form to send me a message even if it's just to say hi!</p>
              <ContactForm subject={subject} changeSubjectAction={editSubject} />
        </Layout>
    )
}

export default ContactPage
