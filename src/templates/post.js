import React from 'react'
import { graphql } from 'gatsby'
import BlogPost from '../components/blog-post'
import Layout from '../components/layout'

const PostTemplate = function Template({ data }) {
  const { markdownRemark } = data

  return (
    <Layout fullWidth>
      <BlogPost post={markdownRemark} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        categories
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default PostTemplate
