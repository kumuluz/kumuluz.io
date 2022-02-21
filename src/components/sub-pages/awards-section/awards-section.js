import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import imgDuke from './duke.jpg'
import imgEurocloud from '../../../assets/images/logos/eurocloud.png'
import imgStartup from '../../../assets/images/logos/startup.png'

import './awards-section.scss';

class AwardsSectionComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <Container className="awards-section py-5 my-5">
        <Row className="align-items-center">
          <Col xs="12" md="6" className="text-center">
            <img src={imgDuke} alt="" className="img-fluid full-width" style={{ width: '300px' }} />
          </Col>
          <Col xs="12" md="6">
            <h5>{t('useCases.awards.subtitle')}</h5>
            <h3>{t('useCases.awards.title')}</h3>
            <p>{t('useCases.awards.content')}</p>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          <Col xs="12" md="6" xl="4" className="mr-xl-5">
            <img src={imgEurocloud} alt="" className="img-fluid" />
            <h5>{t('useCases.awards.eurocloud')}</h5>
          </Col>
          <Col xs="12" md="6" xl="4" className="ml-xl-5">
            <img src={imgStartup} alt="" className="img-fluid" />
            <h5>{t('useCases.awards.startup')}</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const AwardsSection = withTranslation("other")(AwardsSectionComponent);
