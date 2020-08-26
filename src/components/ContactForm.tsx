import React, { ChangeEvent } from 'react'

interface IContactForm {
    subject?: string,
    changeSubjectAction: (event: ChangeEvent<HTMLInputElement>) => void
}

const ContactForm = ({subject, changeSubjectAction}: IContactForm) => {

    return (
        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" value={subject} onChange={changeSubjectAction} />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={15} />
            </div>

            <button type="submit" style={{margin: '10px 0'}}>Submit</button>
        </form>
    )
}

export default ContactForm