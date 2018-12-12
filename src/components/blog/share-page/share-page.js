import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

@translate()
export class BlogSharePage extends Component {

    static propTypes = {
        t: PropTypes.func,
        post: PropTypes.object.isRequired,
        siteUrl: PropTypes.string.isRequired
    };

    render() {

        const { t, post, siteUrl } = this.props

        return (
            <ul className="share-buttons">
                <li className="mr-1">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${post.fields.slug}`} title={t('social.share.facebook')} target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" className="social-button" />
                    </a>
                </li>
                <li className="mr-1">
                    <a href={`https://twitter.com/intent/tweet?source=${siteUrl}${post.fields.slug}&text=${post.frontmatter.title}&url=${siteUrl}${post.fields.slug}`} target="_blank" title={t('social.share.twitter')}>
                        <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" className="social-button" />
                    </a>
                </li>
                <li className="mr-1">
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${post.fields.slug}&source=${siteUrl}${post.fields.slug}`} target="_blank" title={t('social.share.linkedin')}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="social-button" />
                    </a>
                </li>
                <li>
                    <a href={`https://www.reddit.com/submit?url=${siteUrl}${post.fields.slug}&title=${post.frontmatter.title}`} target="_blank" title={t('social.share.reddit')}>
                        <FontAwesomeIcon icon={['fab', 'reddit-square']} size="2x" className="social-button" />
                    </a>
                </li>
            </ul>
        )
    }
}