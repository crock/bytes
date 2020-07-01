import React from 'react'
import SEO from './seo'
import { Link } from 'gatsby'
import withUtterances from 'with-utterances'

const BlogPost = ({ post }) => {
  const { frontmatter, html } = post

  return (
    <>
      <SEO title={frontmatter.title} />
      <Link
        id="goback"
        title="Go back to the homepage"
        to="/"
        style={{
          textDecoration: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          padding: '15px 25px',
        }}
      >
        <span
          role="img"
          aria-label="finger pointing left"
          style={{ marginRight: 5 }}
        >
          👈
        </span>{' '}
        Go Back
      </Link>
      <article>
        <time
          dateTime={frontmatter.date}
          style={{ fontSize: '1.25rem', color: 'lightgrey' }}
        >
          {frontmatter.date}
        </time>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </article>
    </>
  )
}

export default withUtterances(
  BlogPost,
  'crock/bytes',
  'github-light',
  'title',
  'Blog Post',
)
