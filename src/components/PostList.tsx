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
        <ul>
            {posts.map(post => (
              <li key={post.id} className="article-list-item">
                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                <Link to={`/blog/${ kebabCase(post.frontmatter.title.replace(/&/g,'-and-')) }`}>
                {post.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
    )
}

export default PostList