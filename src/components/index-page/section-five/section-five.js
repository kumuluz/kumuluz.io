import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Checkbox } from '../../../components';

import './section-five.scss';

const checkboxes = t => [
  t('sectionFive.checkboxes.open'),
  t('sectionFive.checkboxes.standards'),
  t('sectionFive.checkboxes.community'),
  t('sectionFive.checkboxes.zeroLockIn'),
  t('sectionFive.checkboxes.learningCurve')
];

@translate()
export class SectionFive extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-five mt-5 py-5">
        <Container>
          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <p className="text-center mt-4" dangerouslySetInnerHTML={{ __html: t('sectionFive.content') }} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            {checkboxes(t).map((block, i) => (
              <Col key={i} xs="12" sm="6" lg="4" xl="4" className="mb-3 pb-3">
                <Checkbox className="px-4 text-center d-flex justify-content-center align-items-center" light={true}>{block}</Checkbox>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
