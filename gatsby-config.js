module.exports = {
  siteMetadata: {
    title: 'Kumuluz.io',
    siteUrl: 'https://kumuluz.io',
    blogBasePath: '/blog'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/dev-404-page/`, `/404/`, `/404.html`]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kumuluz.io`,
        short_name: `Kumuluz.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1d8ceb`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/static/locales`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 730,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["en"],
        defaultLanguage: "en",
        siteUrl: "https://kumuluz.io",
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: ".",
          nsSeparator: ":"
        }
      }
    },
  ]
};
