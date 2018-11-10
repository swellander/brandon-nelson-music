const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const gigTemplate = path.resolve(`src/templates/gig.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log("NODE", node);
        createPage({
          path: node.frontmatter.path,
          component: gigTemplate,
          context: {}, // additional data can be passed via context
        })
      })
    })
}