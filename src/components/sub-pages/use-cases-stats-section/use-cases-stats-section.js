import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import './use-cases-stats-section.scss';

@translate(['other'])
export class UseCasesStatsSection extends Component {
  static propTypes = {
    t: PropTypes.func,
    compact: PropTypes.bool
  };

  render() {
    const { t, compact } = this.props;

    return (
      <Container fluid className={`use-cases-stats-section ${compact ? '' : 'py-5'}`}>
        <Row className="pt-5 pb-4 justify-content-center">
          <Col xs="12" xl="6" className="text-center">
            <p dangerouslySetInnerHTML={{ __html: t('useCases.stats.content') }} />
          </Col>
        </Row>
        <Row className={`justify-content-center ${compact ? 'pb-4' : 'pb-5'}`}>
          {['ico', 'startup', 'osp', 'bcDev'].map((num, key) => (
            <Col key={key} xs="6" md="3" xl="2">
              <div className="text-center">
                <h3>{t(`useCases.stats.nums.${num}.num`)}</h3>
                <h6>{t(`useCases.stats.nums.${num}.name`)}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
