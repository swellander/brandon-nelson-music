module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/gigs`,
      name: "markdown-pages",
    }
  }, `gatsby-transformer-remark`,],
}