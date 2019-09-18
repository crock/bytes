require('dotenv').config()
var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    siteUrl:  `https://croc.domains`,
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
        auth: {
          htaccess_user: process.env.WP_USER,
          htaccess_pass: process.env.WP_PASS,
          htaccess_sendImmediately: false,
        },
        excludedRoutes: [
          "**/coupons",
          "**/customers",
          "**/taxes",
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "pub-3627563344348929",
        head: false // Optional
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-105760658-5",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "croc.domains",
      },
    },
    `gatsby-plugin-sitemap`
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
