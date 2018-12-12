/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// XMLHttpRequest polyfill
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fs = require('fs-extra');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const config = require('./gatsby-config');

const BLOG_POST_SLUG_REGEX = /^\/([\d]{4})-([\d]{2})-([\d]{2})-(.+)\/$/

exports.onPostBuild = () => {
  fs.copySync(path.join(__dirname, '/static/locales'), path.join(__dirname, '/public/locales'));
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /scroll-to-element/,
      loader: 'null-loader'
    });
  }
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, createRedirect } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {

const slug = require('slug');
    const prefix = config.siteMetadata.blogBasePath +
     (node.frontmatter.categories ? '/' + node.frontmatter.categories.map(c => slug(c, {lower: true})).join('/') : '')
    const value = createFilePath({ node, getNode, basePath: 'src/pages/blog' })

    const match = BLOG_POST_SLUG_REGEX.exec(value)
    const year = match[1]
    const month = match[2]
    const day = match[3]
    const name = match[4]
    
    createNodeField({
      name: `slug`,
      node,
      value: `${prefix}/${year}/${month}/${day}/${name}/`
    })
  }

  createRedirect({ fromPath: '/blog', toPath: 'http://blog.kumuluz.com', isPermanent: true });
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    categories
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((post, index) => {
          const previous = index === posts.length - 1 ? false : posts[index + 1].node;
          const next = index === 0 ? false : posts[index - 1].node;

          createPage({
            path: `${post.node.fields.slug}`,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}