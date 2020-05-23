module.exports = {
  siteMetadata: {
    siteUrl: `https://crockerbytes.com`,
    title: `Crocker Bytes`,
    description: `inside the mind of a croc`,
    author: `@crockerbytes`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-105760658-5`,
      },
    },
    `gatsby-remark-embedder`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`300`, `400`, `700`, `900`],
            fontDisplay: 'swap'
          },
          {
            family: `Heebo`,
            variants: [`100`, `700`],
            fontDisplay: 'swap'
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-posts`,
        name: `markdown-posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crocker Bytes`,
        short_name: `CrocBytes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#EBF2F2`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/croc-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-postcss',
  ],
}
