import React from 'react'
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

        &:focus {
            outline: none;
            border: 1px solid #58b2d6;
        }
    }

    textarea {
        width: 50%;
        height: 200px;
        border: 1px solid #333;

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
    console.log(featuredImage)

    return (
        <Layout>
            <SEO title={`${title} is for sale!`} description={excerpt} />
            <h1>{title}</h1>
            <PriceTag>${ price ? price : " Make Offer" }</PriceTag>
            { featuredImage ? <a href={`http://${title.toLowerCase()}`}><Image src={featuredImage.source_url} alt="mlbnews.com website preview" /></a> : null }
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div>
                <form name="domain-enquiry" method="post" netlify>
                    <input type="hidden" name="domain_name" value={title} />
                    
                    <FormGroup>
                        <label htmlFor="user_name">Your Name:</label>
                        <input id="user_name" name="user_name" type="text" />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="email">Email Address:</label>
                        <input id="email" name="email" type="email" />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" type="text" />
                    </FormGroup>

                    <StyledLink type="submit" value="Submit" />
                </form>
            </div> 
        </Layout>
    )
}

export default Domain