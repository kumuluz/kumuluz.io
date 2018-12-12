import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';
import { BlogSharePage, BlogSideBar } from '../../blog';

import { authors } from '../../../content/authors';

@translate('blog')
export class BlogPosts extends Component {

    static propTypes = {
        t: PropTypes.func,
        siteUrl: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        topAnnouncement: PropTypes.object
    };

    render() {

        const { t, siteUrl, posts, topAnnouncement } = this.props;

        return (
            <div className="blog">
                <Container>
                    <Row>
                        <Col xs="12" lg="8">
                        {posts
                            .map(({ node }) => {

                                const excerptDelimiterIdx = node.html.indexOf('<!--more-->')

                                const excerpt = excerptDelimiterIdx > 0 ? node.html.substring(0, excerptDelimiterIdx) : node.html
                                const author = authors[node.frontmatter.author]
                        
                                return (
                                    <article key={node.fields.slug} className="post">
                                        <div className="author">     
                                            <span className="date">{node.frontmatter.date}</span>
                                            { node.frontmatter.categories &&
                                                <span className="categories">
                                                { node.frontmatter.categories.map(c => <a key={c}>{ c }</a>) }
                                                </span>
                                            }
                                            <span className="author-name">{author.name}</span>
                                        </div>
                                        <h2 className="title">
                                            <Link to={`${node.fields.slug}`}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </h2>
                                        <div className="intro">
                                            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                                        </div>
                                        <Row>
                                            <Col xs="12" sm="6" className="mb-3 mb-sm-0">
                                                <Link className="btn btn-primary px-3" to={`${node.fields.slug}`}>{t('post.readMore')}</Link>
                                            </Col>
                                            <Col xs="12" sm="6" className="share-post">
                                                <BlogSharePage post={node} siteUrl={siteUrl} />
                                            </Col>
                                        </Row>
                                    </article>
                                )
                        })}
                        </Col>
                        <Col xs="12" lg="4">
                            <BlogSideBar topAnnouncement={topAnnouncement} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}