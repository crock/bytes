import React from 'react'
import SEO from '../components/seo'
import withUtterances from 'with-utterances'

const BlogPost = ({ post }) => {
  const { frontmatter, html } = post

  return (
    <>
      <SEO title={frontmatter.title} />
      <article className="post">
        <div className="post-header">
          <h1>{frontmatter.title}</h1>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </article>
    </>
  )
}
export default withUtterances(
  BlogPost,
  'crock/swamp-comments',
  'github-light',
  'pathname'
)
