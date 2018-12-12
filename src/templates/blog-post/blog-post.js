import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap'
import { Banner, SubscribeSection, Footer } from '../../components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { BlogSharePage, BlogSideBar } from '../../components/blog';

import avatar from './avatar.svg';
import socialCover from './social-cover.png';

import { authors } from '../../content/authors';

@translate('blog')
export default class BlogPostTemplate extends Component {

    static propTypes = {
        t: PropTypes.func
    };

    render() {
        
        const { t } = this.props
        const post = this.props.data.markdownRemark
        const siteUrl = this.props.data.site.siteMetadata.siteUrl
        const author = authors[post.frontmatter.author]
        const { previous, next } = this.props.pathContext
        const topAnnouncement = this.props.data.announcements.edges.map(a => a.node)[0];

        return (
            <div>
                <Helmet title={`${post.frontmatter.title} - ${t('site.title')}`}>
                    <meta property="og:title" content={post.frontmatter.title} />
                    <meta property="og:description" content={post.excerpt} />
                    <meta property="og:type" content="article" />
                    <meta property="og:image" content={`${siteUrl}${socialCover}`}/>
                    <meta property="article:author" content={author.name} />
                    <meta property="article:published_time" content={post.frontmatter.rawDate} />
                    <meta property="article:modified_time" content={post.frontmatter.rawDate} />
                    <meta property="article:publisher" content="kumuluz" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={post.frontmatter.title} />
                    <meta name="twitter:description" content={post.excerpt} />
                    <meta name="twitter:image" content={`${siteUrl}${socialCover}`} />
                    { author.twitter && <meta name="twitter:creator" content={`@${author.twitter}`} />}
                </Helmet>
                <Banner simplified={true} title={t('banner.title')} content={t('banner.content')} />
                <div className="blog">
                    <Container>
                        <Row>
                            <Col xs="12" lg="8">
                                <div className="post">
                                    <div className="author">
                                        <span className="date">{ post.frontmatter.date }</span>
                                        { post.frontmatter.categories &&
                                            <span className="categories">
                                            { post.frontmatter.categories.map(c => <a key={c}>{ c }</a>) }
                                            </span>
                                        }
                                        <span className="author-name">{ author.name }</span>
                                    </div>
                                
                                    <h2 className="title">
                                        { post.frontmatter.title }
                                    </h2>
                                    <article className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
                                </div>
                                <div className="post-author p-3">
                                    <div className="d-sm-flex align-items-center">
                                        <div className="pr-5 text-center">
                                            { author.gravatar &&
                                                <img src={`//www.gravatar.com/avatar/${author.gravatar}?s=512`} className="img-fluid" alt="author" />
                                            }
                                            { !author.gravatar && 
                                                <img src={avatar} className="img-fluid" alt="author" />
                                            }
                                        </div>
                                        <div>
                                            <h5>{ author.name }</h5>
                                            { author.about && <p className="my-3">{ author.about }</p> }
                                        </div>
                                    </div>
                                </div>
                                { (previous || next) &&
                                    <div className="other-posts">
                                        <h5>Related articles</h5>
                                        <div className="d-flex justify-content-between mb-3 mb-5">
                                            { previous && 
                                                <Link to={`${previous.fields.slug}`} className="prev align-items-center">
                                                    <div>
                                                        { previous.frontmatter.categories &&
                                                            <div className="categories">
                                                                { previous.frontmatter.categories.map(c => <span key={c}>{c}</span>)}
                                                            </div>
                                                        }
                                                        <h4>
                                                            { previous.frontmatter.title }
                                                        </h4>
                                                    </div>
                                                </Link>
                                            }
                                            
                                            { next && 
                                                <Link to={`${next.fields.slug}`} className="next align-items-center">
                                                    <div>
                                                        { next.frontmatter.categories &&
                                                            <div className="categories">
                                                                { next.frontmatter.categories.map(c => <span key={c}>{c}</span>)}
                                                            </div>
                                                        }
                                                        <h4>
                                                            { next.frontmatter.title }
                                                        </h4>
                                                    </div>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                }
                                <div className="share-page mb-5">
                                    <h4 className="mb-3">{t('post.sharePage')}:</h4>
                                    <BlogSharePage post={post} siteUrl={siteUrl} />
                                </div>
                            </Col>
                            <Col xs="12" lg="4">
                                <BlogSideBar topAnnouncement={topAnnouncement} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <SubscribeSection hideSocial={true} />
                <Footer />
            </div>
        );
    }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        rawDate: date
        author
        categories
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
`