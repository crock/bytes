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
            fileAbsolutePath
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
const getSlug = path => {
  const regex = /([\w-]+).(md|mdx)$/g
  return regex.exec(path)[1];
}

    return (
        <ul style={{listStyleType: 'none', paddingLeft: 0}}>
            {posts.map(post => (
              <li key={post.id} style={{padding: '10px 0'}}>
                <div style={{width: 175, display: 'inline-block'}}>
                  <span>{post.frontmatter.date}</span>
                </div>
                <Link to={`/${ getSlug(post.fileAbsolutePath) }`}>
                  {post.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
    )
}

export default PostList