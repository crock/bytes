import React from 'react'
import BlogPost from '../components/blog-post'
import Layout from '../components/layout'

const PostTemplate = ({ pageContext }) => {
  return (
    <Layout fullWidth>
      <BlogPost post={pageContext} />
    </Layout>
  )
}

export default PostTemplate
