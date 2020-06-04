module.exports = {
  siteMetadata: {
    title: 'davidramiro.com',
    description:
      'Soy desarrollador de aplicaciones web con tecnologías JavaScript.',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
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
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     apiToken: `2c58d65eedb1dd15701f5c959860d6`,
    //     previewMode: false,
    //     disableLiveReload: false,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
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
        trackingId: 'UA-112055111-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        pageTransitionDelay: 0,
        optimizeId: 'GTM-PR4NNZJ',
        experimentId: 'v6vJtt3KR5SaeG6L6sQz8Q',
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'davidramiro.com',
      },
    },
  ],
};
