import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ pageContext }) => {
    const {  title, author, content, date } = pageContext

    const formatDate = date => {

        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }

    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <span className="post-meta" style={{
                color: `#9e9e9e`,
                marginBottom: `25px`,
                fontWeight: `300`
            }}>Posted by <Link to={`/user/${author.slug}`} style={{ textDecoration: `none`, color: `#3ead5a`, fontWeight: `bold` }}>{author.name}</Link> | { formatDate(date) }</span>
            <div style={{ fontWeight: `400`, lineHeight: `2rem` }} dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export default Post