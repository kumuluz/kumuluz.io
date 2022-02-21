import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { DownloadButton } from '../../../components';

import './media-kit.scss';

class MediaKitComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <Container fluid className="py-5 media-kit">
        <Row className="py-5 justify-content-center">
          <Col xs="12" className="text-center">
            <h4>{t('press.mediaKit.title')}</h4>
            <p>{t('press.mediaKit.content')}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="pb-5 d-block d-lg-flex justify-content-center text-center">
            <div className="m-2 d-inline-block">
              <DownloadButton color="info">{t('press.mediaKit.actions.downloadLogos')}</DownloadButton>
            </div>
            <div className="m-2 d-inline-block">
              <DownloadButton color="info">{t('press.mediaKit.actions.downloadBanners')}</DownloadButton>
            </div>
            <div className="m-2 d-inline-block">
              <DownloadButton color="info">{t('press.mediaKit.actions.prRelease')}</DownloadButton>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const MediaKit = withTranslation("other")(MediaKitComponent);
