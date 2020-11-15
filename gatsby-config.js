module.exports = {
  siteMetadata: {
    siteUrl: `https://alexandercrocker.com`,
    title: `Alexander Crocker`,
    description: `Software Engineer in Orlando, FL`,
    author: `@crockerbytes`,
  },
  plugins: [
    {
      resolve: `gatsby-source-tumblr`,
      options: {
        blogIdentifier: `alexcrocker`,
        consumerKey: `2Jqw0B1EzMPysOOAtgJ5aIWVDfbkqPwFItsOXZtdXwGExOmrnA`,
      },
    },
    `gatsby-remark-embedder`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexander Crocker`,
        short_name: `Alex Crocker`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#EBF2F2`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/croc-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
  ],
}
