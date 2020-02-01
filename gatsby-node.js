const path = require('path')
const slash = require('slash')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
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
    createPage({
      // will be the url for the page
      path: `/blog/${edge.node.frontmatter.slug}`,
      component: slash(postTemplate),
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}
