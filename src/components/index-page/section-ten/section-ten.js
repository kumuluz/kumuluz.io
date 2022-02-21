import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import './section-ten.scss';
import { DecentralizedImage } from '../../../components';


class SectionTenComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-ten pt-5 mt-5">
        <Container>
          <Row className="align-items-center justify-content-center text-center pb-5 mb-3">
            <Col xs="12" xl="7">
              <h3 dangerouslySetInnerHTML={{ __html: t('sectionTen.title') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sectionTen.preContent') }} />
            </Col>
          </Row>
        </Container>
        <div className="light-wrapper py-5">
          <Container className="my-5">
            <Row>
              <Col xs="12">
                <DecentralizedImage />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export const SectionTen = withTranslation()(SectionTenComponent);
