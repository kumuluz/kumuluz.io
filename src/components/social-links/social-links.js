import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './social-links.scss';

export class SocialLinks extends Component {
  render() {
    return (
      <div className="social d-block d-md-flex text-center">
        {/*<a href="https://t.me/kumuluz" target="_blank" rel="noopener noreferrer">*/}
          {/*<FontAwesomeIcon icon={['fab', 'telegram']} size="3x" className="m-2 my-md-0 mx-md-5" />*/}
        {/*</a>*/}
        <a href="https://twitter.com/kumuluz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className="m-2 my-md-0 mx-md-5" />
        </a>
        <a href="https://linkedin.com/company/kumuluz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="m-2 my-md-0 mx-md-5" />
        </a>
        <a href="https://github.com/kumuluz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="m-2 my-md-0 mx-md-5" />
        </a>
        <a href="mailto:info@kumuluz.io" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="at" size="3x" className="m-2 my-md-0 mx-md-5" />
        </a>
      </div>
    );
  }
}
