import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const PostBit = styled.div`
  width: 100%;
  height: auto;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;

  &:after {
    content: '';
    display: block;
    width: 75px;
    height: 1px;
    background-color: #d1d1d1;
    margin: 25px auto;
  }
`

const PostDate = styled.small`
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: normal;
  color: #9e9e9e;
`

const PostTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: black;
`

const ReadButton = styled(Link)`
  padding: 5px 15px;
  background-color: #3fad5a;
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 15px;
`

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
    <Layout fullWidth={true}>
      <SEO title="Home" description="Where Alex Crocker shares his throughts and knowledge on tech, design, coding, and domain names." />
      {posts.map(post => (
        <PostBit key={post.id}>
          <PostDate>{post.frontmatter.date}</PostDate>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <ReadButton to={`/blog/${post.frontmatter.slug}`}>
            View Post
          </ReadButton>
        </PostBit>
      ))}
    </Layout>
  )
}

export default IndexPage
