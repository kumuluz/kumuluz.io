import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { DownloadButton } from '../../../components';

import './whitepaper-section.scss';

@translate(['platform', 'translations'])
export class WhitepaperSection extends Component {
  static propTypes = {
    t: PropTypes.func,
    light: PropTypes.bool,
    title: PropTypes.string
  };

  render() {
    const { t, title, light } = this.props;

    return (
      <Container fluid className={`py-5 whitepaper-section ${light && 'light'}`}>
        <Row className="pt-5 pb-4 justify-content-center">
          <Col xs="12" xl="8" className="text-center">
            <h5>{t('whitepaper.subtitle')}</h5>
            <h2>{title}</h2>
            <p className="mt-4 px-5">{t('whitepaper.content')}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="pb-5 d-block d-lg-flex justify-content-center text-center">
            <div className="m-2 d-inline-block">
              <DownloadButton color="info">{t('translations:actions.whitepaper')}</DownloadButton>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
