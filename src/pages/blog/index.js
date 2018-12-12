import React, { Component } from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Banner, SubscribeSection, Footer } from '../../components';
import { BlogPosts } from '../../components/blog';

import './index.scss';

@translate('blog')
export default class BlogIndex extends Component {

    static propTypes = {
      t: PropTypes.func
    };

    render() {

      const { t } = this.props;

      const posts = this.props.data.allMarkdownRemark.edges;
      const topAnnouncement = this.props.data.announcements.edges.map(a => a.node)[0];
      const siteUrl = this.props.data.site.siteMetadata.siteUrl;

      return (
        <div>
          <Helmet title={t('site.title')} />
          <Banner simplified={true} title={t('banner.title')} content={t('banner.content')} />
          <BlogPosts posts={posts} siteUrl={siteUrl} topAnnouncement={topAnnouncement} />
          <SubscribeSection hideSocial={true} />
          <Footer />
        </div>
      )
    }
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            categories
          }
        }
      }
    }
    announcements: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { categories: { in: ["Announcement"] } } },
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;