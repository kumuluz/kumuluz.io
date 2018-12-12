import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';

import iconArchitecture from './icon-architecture.svg'

import './section-seven.scss';

@translate()
export class SectionSeven extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-seven py-5">
        <Container className="py-3">
          <Row className="align-items-center text-center">
            <Col>
              <Link to="/platform">
                <img src={iconArchitecture} className="img-fluid mb-4 mb-md-0" />
              </Link>
            </Col>
            <Col xs="12" md="6" className="text-left">
              <p className="font-weight-bold mb-1 text-left">{t('sectionSeven.title')}</p>
              <p className="text-left lighter-text">{t('sectionSeven.content')}</p>
              <Link to="/platform" className="mt-3 px-4 btn btn-primary">
                {t('actions.viewMore')}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
