import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './index.scss';

@translate()
export default class ErrorPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="index">
        <div className="banner">
          <h1 className="col-lg-9 col-xl-8 px-5 mx-auto" dangerouslySetInnerHTML={{ __html: t('404') }} />
        </div>
      </div>
    );
  }
}
