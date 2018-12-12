import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import { Header } from '../components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import scrollToElement from 'scroll-to-element';
import Waypoint from 'react-waypoint';

import 'prismjs/themes/prism-okaidia.css';
import 'animate.css';

import { doPolyfills } from './polyfills';
import i18n from './i18n';
import './fontawesome';

import './index.scss';

@translate()
export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    doPolyfills();
    translate.setI18n(i18n);

    this.state = {
      showFAB: false
    };
  }

  toggleFAB(e) {
    if (e.currentPosition === 'above') {
      this.setState({ showFAB: true });
    } else if (e.currentPosition === 'inside') {
      this.setState({ showFAB: false });
    }
  }

  render() {
    const { children, t } = this.props;
    const { showFAB } = this.state;

    return (
      <div id="top">
        <Helmet title={t('site.title')}>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={t('site.title')} />
          <meta name="twitter:site" content="@kumuluz" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1d8ceb" />
          <meta name="msapplication-TileColor" content="#da532c" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-115869337-1`} />
          <script>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-115869337-1');
            `}
          </script>
        </Helmet>

        {showFAB && (
          <div className="btn btn-primary btn-fab" onClick={() => scrollToElement('#top')}>
            <FontAwesomeIcon icon="arrow-up" />
          </div>
        )}

        <Header />

        <Waypoint onPositionChange={e => this.toggleFAB(e)} />
        <div>{children()}</div>
      </div>
    );
  }
}
