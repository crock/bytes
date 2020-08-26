import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { timeStamp } from 'console'

const PostList = () => {
    const data = useStaticQuery(graphql`
    {
        allTumblrPost(filter: {blog_name: {eq: "alexcrocker"}, type: {eq: "text"}}) {
          edges {
            node {
              id
              date
              timestamp
              title
              short_url
            }
          }
        }
    }
  `)

const posts = data.allTumblrPost.edges.map(edge => edge.node)

    return (
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
            {posts.map(post => (
              <li key={post.id} style={{padding: '10px 0'}}>
                <div style={{width: 175, display: 'inline-block'}}>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <a href={post.short_url} target="_blank">
                  {post.title}
                </a>
              </li>
            ))}
        </ul>
    )
}

export default PostList