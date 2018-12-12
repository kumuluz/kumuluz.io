module.exports = {
  siteMetadata: {
    title: 'Kumuluz.io',
    siteUrl: 'https://kumuluz.io',
    blogBasePath: '/blog'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/dev-404-page/`, `/404/`, `/404.html`]
      }
    },
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 10
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog'
      },
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
                blogBasePath
              }
            }
          }
        `,
        setup: ({ query: { site: { siteMetadata }, ...rest } }) => {
          return {
            ...siteMetadata,
            ...rest,
            feed_url: siteMetadata.siteUrl + '/blog/feed.xml'
          }
        },
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/feed.xml"
          }
        ]
      }
    }
  ]
};
