import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ pageContext }) => {
    const { posts } = pageContext

    const formatDate = date => {

        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>

            {
                posts.map(post => (
                    <article className="card post-card" id={`post-${post.id}`} key={post.id}
                        style={{
                            display: `flex`,
                            flexDirection: `column`,
                            justifyContent: `flex-start`,
                            alignItems: `flex-start`,
                            padding: `25px`,
                            boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
                            borderRadius: `6px`,
                            fontFamily: `'Roboto', sans-serif`
                        }}
                    >
                        <h2 style={{marginTop: 0, marginBottom: `25px`}}>{post.title}</h2>
                        <span className="post-meta" style={{
                            color: `#9e9e9e`,
                            marginBottom: `15px`,
                            fontWeight: `300`
                        }}>Posted by <Link to={`/user/${post.author.slug}`} style={{ textDecoration: `none`, color: `#3ead5a`, fontWeight: `bold` }}>{post.author.name}</Link> | { formatDate(post.date) }</span>
                        <div style={{ fontWeight: `400`, lineHeight: `2rem` }} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                        <Link to={`/blog/${post.slug}`}
                            style={{
                                width: `200px`,
                                height: `40px`,
                                lineHeight: `40px`,
                                borderRadius: `6px`,
                                backgroundColor: `#3ead5a`,
                                color: `#ffffff`,
                                textTransform: `uppercase`,
                                textDecoration: `none`,
                                textAlign: `center`,
                                marginTop: `25px`,
                            }}
                        >Read More</Link>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export default Blog