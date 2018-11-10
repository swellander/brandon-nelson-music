const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const gigTemplate = path.resolve(`src/templates/gig.js`)

  //sourced from https://gist.github.com/mathewbyrne/1280286
  // const slugify = text => (
  //   text.toString().toLowerCase()
  //     .replace(/\s+/g, '-')           // Replace spaces with -
  //     .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  //     .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  //     .replace(/^-+/, '')             // Trim - from start of text
  //     .replace(/-+$/, '')             // Trim - from end of text
  // )

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
        //TODO: figure out how to programatically create a path from the title
        createPage({
          path: node.frontmatter.path,
          component: gigTemplate,
          context: {}, // additional data can be passed via context
        })
      })
    })
}