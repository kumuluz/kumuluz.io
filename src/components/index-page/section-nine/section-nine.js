import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { DonutChart } from '../../../components';

import './section-nine.scss';

import { fundsDistribution } from '../../../content/distribution';

@translate()
export class SectionNine extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-nine mt-5 pt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h5>{t('sectionNine.subTitle')}</h5>
              <h3>{t('sectionNine.title')}</h3>
              <p>{t('sectionNine.content')}</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <DonutChart values={fundsDistribution(t)} />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            {fundsDistribution(t).map((dis, key) => (
              <Col key={key} xs="12" md="6" lg="4" className="text-center p-4">
                <FontAwesomeIcon icon="square" size="lg" style={{ color: dis.color }} />
                <span className="title">{dis.title}</span>
                <span className="percentage">{Math.round(dis.percentage * 100)}%</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
