import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import icon1 from './icon-without-kumuluz.svg'
import icon2 from './icon-with-kumuluz.svg'

import './section-one.scss';

@translate()
export class SectionOne extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-one pt-5">
        <Container className="mt-5">
          <Row>
            <Col>
              <h3 dangerouslySetInnerHTML={{ __html: t('sectionOne.title') }} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6">
              <div className="block">
                <img src={icon1} alt="" className="img-fluid mb-3" />
                <h5 className="mb-3">{t('sectionOne.withoutKumuluz.title')}</h5>
                <p dangerouslySetInnerHTML={{ __html: t('sectionOne.withoutKumuluz.description') }} />
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="block">
                <img src={icon2} alt="" className="img-fluid mb-3" />
                <h5 className="mb-3">{t('sectionOne.withKumuluz.title')}</h5>
                <p dangerouslySetInnerHTML={{ __html: t('sectionOne.withKumuluz.description') }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
