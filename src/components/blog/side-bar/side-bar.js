import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

@translate(['blog', 'translations'])
export class BlogSideBar extends Component {

    static propTypes = {
        t: PropTypes.func,
        topAnnouncement:  PropTypes.object
    };

    render() {

        const { t, topAnnouncement } = this.props

        return (
            <div className="sidebar">
                <div className="updates">
                    <h4>{t('sidebar.feed.title')}</h4>
                    <p>{t('sidebar.feed.content')}</p>
                    <Link to="/blog/feed.xml" className="btn btn-primary btn-sm full-width">
                        <FontAwesomeIcon icon="rss" className="mr-1" />
                        {t('translations:actions.subscribe')}
                    </Link>
                </div>

                <div className="updates mt-5">
                    <h5>{t('sidebar.mailing.title')}</h5>
                    <p>{t('sidebar.mailing.content')}</p>
                    <br/>
                    <Form method="POST" target="_blank" action="https://kumuluz.us12.list-manage.com/subscribe/post?u=e45cbf1dbe43e3d7bd15b3abd&amp;id=fc67f95a6b">
                        <Input type="email" name="EMAIL" id="subscribeEmail" placeholder={t('sidebar.mailing.inputPlaceholder')} className="mb-3" />
                        <Button color="primary" className="full-width">
                        {t('translations:actions.subscribe')}
                        </Button>
                    </Form>
                </div>

                { topAnnouncement && 
                    <div className="recommended mt-5">
                        <h3>Top posts</h3>
                        
                        { topAnnouncement && 
                            <div>
                                <h6>Big announcements</h6>
                                <h4><Link to={topAnnouncement.fields.slug}>{topAnnouncement.frontmatter.title}</Link></h4>
                                <hr/>
                            </div>
                        }
                        
                        {/* <h6>Product</h6>
                        <h4><a href="{{ productPost.url | prepend: site.baseurl }}">Title</a></h4>
                        <hr/>

                        <h6>For Developers</h6>
                        <h4><a href="{{ devPost.url | prepend: site.baseurl }}">Title</a></h4>
                        <hr/>

                        <h6>News and Media</h6>
                        <h4><a href="{{ newsPost.url | prepend: site.baseurl }}">Title</a></h4>
                        <hr/>

                        <h6>Community</h6>
                        <h4><a href="{{ communityPost.url | prepend: site.baseurl }}">Title</a></h4>
                        <hr/> */}
                    </div>
                }
            </div>
        )
    }
}