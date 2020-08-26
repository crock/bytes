import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
                <time dateTime={post.date} style={{marginRight: 15}}>{post.date.split(' ')[0]}</time>
                <a href={post.short_url} target="_blank">
                  {post.title}
                </a>
              </li>
            ))}
        </ul>
    )
}

export default PostList