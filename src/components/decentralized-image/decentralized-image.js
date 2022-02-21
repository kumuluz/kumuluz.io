import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Row, Col } from 'reactstrap';

import imgCentralized from './centralized.svg'
import imgDeWithout from './de-without.svg'
import imgDeWith from './de-with.svg'

import './decentralized-image.scss';

class DecentralizedImageComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="decentralized-image">
        <Row className="text-center">
          <Col xs="12" lg="4" className="mb-5 mb-lg-0">
            <p dangerouslySetInnerHTML={{ __html: t('decentralizedImage.centralized') }} />
            <img src={imgCentralized} alt="" className="img-fluid mt-5 mb-5 mb-lg-0" />
          </Col>
          <Col xs="12" lg="4" className="mb-5 mb-lg-0">
            <p dangerouslySetInnerHTML={{ __html: t('decentralizedImage.withoutKumuluz') }} />
            <img src={imgDeWithout} alt="" className="img-fluid mt-5 mb-5 mb-lg-0" />
          </Col>
          <Col xs="12" lg="4" className="mb-5 mb-lg-0 good">
            <p dangerouslySetInnerHTML={{ __html: t('decentralizedImage.withKumuluz') }} />
            <img src={imgDeWith} alt="" className="img-fluid mt-5 mb-5 mb-lg-0" />
          </Col>
        </Row>
      </div>
    );
  }
}

export const DecentralizedImage = withTranslation()(DecentralizedImageComponent);
