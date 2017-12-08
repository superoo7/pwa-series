module.exports = {
  siteMetadata: {
    title: `SUPEROO7's PWA Guide`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110948376-1'
      }
    }
  ]
};
