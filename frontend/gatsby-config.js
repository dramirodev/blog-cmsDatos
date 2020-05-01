module.exports = {
  siteMetadata: {
    title: 'davidramiro.com',
    description:
      'Blog personal de David Ramiro diseñado utilizando React Gatsby ',
    siteUrl: 'https://www.davidramiro.com',
    author: {
      name: 'M. David Ramiro',
      summary: 'Aprendiz de desarrollador web, enamorado de JavaScript',
    },
    image: './static/david.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@dramirobarragan',
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
        name: 'Blog de David Ramiro',
        short_name: 'davidramiro.com',
        lang: 'es',
        start_url: '/',
        background_color: '#003d5c',
        theme_color: '#003d5c',
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
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`${__dirname}/src/components/layout.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-112055111-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'GTM-PR4NNZJ',
        // Enables Google Optimize Experiment ID
        experimentId: 'v6vJtt3KR5SaeG6L6sQz8Q',
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'davidramiro.com',
      },
    },
  ],
};
