import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import {Checkbox} from '../../components';

import './partners-section.scss';

import { partners } from '../../content/partners';

@translate()
export class PartnersSection extends Component {
  static propTypes = {
    t: PropTypes.func,
    all: PropTypes.bool
  };

  render() {
    const { t, all } = this.props;
    return (
      <div className="partners-section">
        {all && this.renderAllPartners(t)}

        {!all && this.renderFeaturedPartners(t)}
      </div>
    );
  }

  renderFeaturedPartners(t) {
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <Col xs="12" md="6">
            <h5>{t('partnersSection.title')}</h5>
            <h2 className="mb-4">{t('partnersSection.subtitle')}</h2>
            <p className="mb-3">{t('partnersSection.content1')}</p>
            <p className="mb-3">{t('partnersSection.content2')}</p>
            <Row>
              {['multi', 'highstart', 'ico', 'large', 'gov', 'open'].map((cb, key) => (
                <Col key={key} xs="12" className="pb-3">
                  <Checkbox>{t(`partnersSection.points.${cb}`)}</Checkbox>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs="12" md="6">
            <Row>{partners.slice(0, 18).map((q, key) => this.renderPartner(q, key, { lg: 4, md: 6, sm: 6 }))}</Row>
          </Col>
        </Row>
      </Container>
    );
  }

  renderAllPartners(t) {
    return (
      <Container>
        <Row>
          <Col className="my-5 text-center">
            <h3>{t('partnersSection.title')}</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">{partners.map((q, key) => this.renderPartner(q, key, { lg: 3, md: 4, sm: 6 }))}</Row>
      </Container>
    );
  }

  renderPartner(q, key, { lg, md, sm }) {
    return (
      <Col xs={sm} sm={sm} md={md} lg={lg} key={key} className="block">
        <img src={q.logo} alt={q.name} className="img-fluid p-4" />
        <div className="floater">
          <h5>{q.name}</h5>
        </div>
      </Col>
    );
  }
}
