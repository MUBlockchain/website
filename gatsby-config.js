module.exports = {
  siteMetadata: {
    title: `Miami University Blockchain Club`,
    description: `Miami University Blockchain Club Website`,
    image: `/static/assets/images/logo.png`,
    author: `Ian Brighton`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/static/assets/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `images`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `/static/assets/images/MUBC Logo Big Letters (vector) copy 2.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `markdown-pages`,
      },
    },
    `gatsby-plugin-react-helmet`
  ]
}
