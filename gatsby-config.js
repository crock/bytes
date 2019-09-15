var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: `Croc Domains`,
    description: `Domaining Passion`,
    author: `@crocdomains`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Croc Domains`,
        short_name: `crocdomains`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#EBF2F2`,
        display: `minimal-ui`,
        icon: `src/images/croc-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `cms.croc.domains`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "YOUR_GOOGLE_ADSENSE_TRACKING_ID",
        head: false // Optional
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  }
}
