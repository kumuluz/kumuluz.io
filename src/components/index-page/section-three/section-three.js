import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import imgKumuluzGraphic from './kumuluz-graphic.svg'

import './section-three.scss';

class SectionThreeComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-three mt-5 pt-5">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" lg="6" className="mb-5 pr-5">
              <h5>{t('sectionThree.subTitle')}</h5>
              <h3>{t('sectionThree.title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('sectionThree.content1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sectionThree.content2') }} />
            </Col>
            <Col xs="12" lg="6">
              <img src={imgKumuluzGraphic} alt="" className="img-fluid mb-5" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const SectionThree = withTranslation()(SectionThreeComponent);
