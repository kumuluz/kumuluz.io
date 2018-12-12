import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';

import './roadmap-section.scss';

@translate()
export class RoadmapSection extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="roadmap-section">
        <Container>
          <Row>
            <Col className="my-5 pt-5 text-center">
              <h5>{t('roadmapSection.subTitle')}</h5>
              <h3>{t('roadmapSection.title')}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="my-5 py-5">
              <div className="line">
                {['2013', '2015', '2017', '2018', '2019'].map((year, key) => (
                  <div key={key} className={`year ${year === '2018' && 'active'}`}>
                    <div className="text">
                      {t(`roadmapSection.${year}.title`)}
                      <div dangerouslySetInnerHTML={{ __html: t(`roadmapSection.${year}.content`) }}/>
                    </div>
                    {year}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5 d-flex justify-content-center">
              <Link to="/roadmap" className="mt-4 btn btn-primary">
                {t('actions.viewFullTimeline')}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
