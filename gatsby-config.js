module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`, `gatsby-transformer-remark`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/gigs`,
      name: "markdown-pages",
    }
  }],
}