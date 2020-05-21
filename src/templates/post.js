import React from 'react'
import BlogPost from '../components/blog-post'
import Layout from '../layouts/'

const PostTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <main className="container mx-auto px-4 md:p-0">
        <BlogPost post={pageContext} />
      </main>
    </Layout>
  )
}

export default PostTemplate
