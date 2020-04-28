module.exports = {
  siteMetadata: {
    title: 'davidramiro.com',
    description: 'Blog personal diseñado utilizando React, Gatsby y Strapi',
    author: 'M. David Ramiro',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/avatar-icon.png',
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `2c58d65eedb1dd15701f5c959860d6`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
  ],
};
