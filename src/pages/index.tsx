import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../layouts/'
import SEO from '../components/seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
        edges {
          node {
            id
            html
            frontmatter {
              categories
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Croc's Swamp" description="Where Alex Crocker shares his throughts and knowledge on tech, design, coding, and domain names." />
      <main className="container mx-auto px-4 md:p-0">
        <h1 className="page-title">Welcome to Croc's Swamp!</h1>
        <section>
          <h2>The Blog</h2>
          {posts.map(post => (
            <article key={post.id} className="article-list-item">
              <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
              <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
