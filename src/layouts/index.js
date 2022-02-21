import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Header } from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import scrollToElement from 'scroll-to-element';
import {Waypoint} from 'react-waypoint';

import './index.scss';
import {useI18next} from "gatsby-plugin-react-i18next";

export function Layout({children}) {
  const [showFAB, setFAB] = useState(false);
  const {t} = useI18next();
  
  function toggleFAB(e) {
    if (e.currentPosition === 'above') {
      setFAB(true);
    } else if (e.currentPosition === 'inside') {
      setFAB(false);
    }
  }
  
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
                function gtag(){window.dataLayer.push(arguments)}
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
        
        <Waypoint onPositionChange={toggleFAB} />
        <div>{children}</div>
      </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
