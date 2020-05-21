const path = require('path')
const slash = require('slash')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              categories
              date
              slug
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postTemplate = path.resolve(`./src/templates/post.js`)
  _.each(result.data.allMarkdownRemark.edges, edge => {
    const { frontmatter, html } = edge.node
    createPage({
      // will be the url for the page
      path: `/blog/${frontmatter.slug}`,
      component: slash(postTemplate),
      context: {
        frontmatter,
        html,
      },
    })
  })
}
