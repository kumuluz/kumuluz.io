import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { DownloadButton } from '../../components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './banner.scss';

@translate()
export class Banner extends Component {
  static propTypes = {
    t: PropTypes.func,
    simplified: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  render() {
    const { t, simplified, title, content } = this.props;

    return (
      <div>
        <div className={`banner ${simplified ? 'simplified' : ''} p-3 p-sm-5`}>
          {!simplified && (
            <Container key="top" className="full-height">
              <Row className="full-height d-flex justify-content-center align-items-center">
                <Col xs="12" className="text-block">
                  <h5>{t('banner.authorsSwag')}</h5>
                  <h1>{t('banner.punchline1')}</h1>
                  <h4>{t('banner.punchline2')}</h4>

                  <div className="d-flex buttons mb-5 mb-lg-0">
                    {/*<DownloadButton className="mb-3 mb-sm-0 mx-sm-3 mx-auto" color="secondary">*/}
                      {/*{t('actions.whitepaper')}*/}
                    {/*</DownloadButton>*/}
                    {/*<DownloadButton className="mx-sm-3 mx-auto" color="secondary">*/}
                      {/*{t('actions.businessOverview')}*/}
                    {/*</DownloadButton>*/}
                  </div>
                </Col>

                <Col xs="12" md="9" lg="5" xl="4" className="subscribe-block">
                  {/* TODO add video */}
                </Col>
              </Row>
            </Container>
          )}
          {simplified && (
            <Container>
              <Row>
                <Col xs="12">
                  <h1>{title}</h1>
                  {(typeof content === 'string' && <p dangerouslySetInnerHTML={{ __html: content }} />) || content}
                </Col>
              </Row>
            </Container>
          )}
        </div>
        {!simplified && (
          <Container className="white-box">
            <Row className="justify-content-between">
              <Col xs="12" lg="6" xl="7" className="p-4">
                <p className="px-3 pt-3">{t('banner.subscribe.description')}</p>
                <Form inline className="px-3 pb-3" method="POST" target="_blank" action="https://kumuluz.us12.list-manage.com/subscribe/post?u=e45cbf1dbe43e3d7bd15b3abd&amp;id=fc67f95a6b">
                  <FormGroup className="flex-width mb-0">
                    <Input
                      className="full-width"
                      type="email"
                      name="EMAIL"
                      id="subscribeEmail"
                      placeholder={t('banner.subscribe.emailPlaceholder')}
                    />
                  </FormGroup>
                  <Button color="primary" className="ml-0 ml-sm-3">
                    {t('actions.subscribe')}
                  </Button>
                </Form>
              </Col>
              <Col xs="12" lg="6" xl="2" className="links p-4">
                <div className="d-flex align-items-center justify-content-center full-height">
                  {/*<a className="d-flex align-items-center mr-3" href="https://t.me/kumuluz" target="_blank" rel="noopener noreferrer">*/}
                    {/*<div className="icon ml-2 mr-3">*/}
                      {/*<FontAwesomeIcon icon={['fab', 'telegram']} size="2x" />*/}
                    {/*</div>*/}
                    {/*<span>{t('actions.joinCommunity')}</span>*/}
                  {/*</a>*/}
                  <a className="d-flex align-items-center" href="https://github.com/kumuluz" target="_blank" rel="noopener noreferrer">
                    <div className="icon mr-3">
                      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </div>
                    <span>{t('actions.checkCode')}</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
