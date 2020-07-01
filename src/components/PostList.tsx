import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { kebabCase } from 'lodash'

const PostList = () => {
    const postData = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
        edges {
          node {
            id
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)

const posts = postData.allMarkdownRemark.edges.map(edge => edge.node)

    return (
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
            {posts.map(post => (
              <li key={post.id} style={{padding: '10px 0'}}>
                <div style={{width: 175, display: 'inline-block'}}>
                  <span>{post.frontmatter.date}</span>
                </div>
                <Link to={`/blog/${ kebabCase(post.frontmatter.title.replace(/&/g,'-and-')) }`}>
                  {post.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
    )
}

export default PostList