import React, { useState } from 'react'
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 25px;

    label {
        font-weight: bold;
        margin-bottom: 10px;
    }

    input {
        width: 50%;
        height: 50px;
        border: 1px solid #333;
        text-indent: 10px;

        &:focus {
            outline: none;
            border: 1px solid #58b2d6;
        }
    }

    textarea {
        width: 50%;
        height: 200px;
        border: 1px solid #333;
        text-indent: 10px;

        &:focus {
            outline: none;
            border: 1px solid #58b2d6;
        }
    }

    @media screen and (max-width: 768px) {

        input,textarea {
            width: 100%;
        }
    }
`

const StyledLink = styled.input`
    width: 200px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 6px;
    background-color: #3ead5a;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
`

const PriceTag = styled.div`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 25px;
`

const Image = styled.img`
    width: 50%;
    height: auto;
    border: 3px solid black;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const Domain = ({ pageContext }) => {
    const {  title, content, featuredImage, price, excerpt } = pageContext
    const [status,setStatus] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const encode = (data) => {
        let formData = '';
        Object.keys(data).forEach((k)=>{
          formData += `${k}=${encodeURIComponent(data[k])}&`
        });
        return formData
    }
    
    const handleSubmit = e => {
        const data = { "form-name": "domain-enquiry", 
                        "domain": title, 
                        "user_name": name, 
                        "email": email, 
                        "message": message }
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": 'application/x-www-form-urlencoded' },
          body: encode(data).slice(0, -1)
        })
          .then(() => {
            setStatus("Form Submission Successful!!")
            window.location.href = "/success"
          })
          .catch(error => setStatus("Form Submission Failed!"));
    
        e.preventDefault();
    };

    
    const handleChange = e => {
        const {name, value} = e.target
        if (name === 'user_name' ){
          return setName(value)
        }
        if (name === 'email' ){
          return setEmail(value)
        }
        if (name === 'message' ){
          return setMessage(value)
        }
    }

    return (
        <Layout>
            <SEO title={`${title} is for sale!`} description={excerpt} />
            <h1>{title}</h1>
            <PriceTag>${ price ? price : " Make Offer" }</PriceTag>
            { featuredImage ? <a href={`http://${title.toLowerCase()}`}><Image src={featuredImage.source_url} alt="mlbnews.com website preview" /></a> : null }
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div>
                <form name="domain-enquiry" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                    <input style={{ display: `none` }} name="bot-field" />
                    <input type="hidden" name="form-name" value="domain-enquiry" />
                    <input type="hidden" name="domain" value={title} />
                    
                    <FormGroup>
                        <label htmlFor="user_name">Your Name:</label>
                        <input id="user_name" name="user_name" type="text" value={name} onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="email">Email Address:</label>
                        <input id="email" name="email" type="email" value={email} onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" type="text" value={message} onChange={handleChange} />
                    </FormGroup>

                    <StyledLink type="submit" value="Submit" />
                </form>
                <p>{status}</p>
            </div> 
        </Layout>
    )
}

export default Domain