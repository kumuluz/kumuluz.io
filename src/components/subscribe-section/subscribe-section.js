import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './subscribe-section.scss';

class SubscribeSectionComponent extends Component {
  static propTypes = {
    t: PropTypes.func,
    hideSocial: PropTypes.bool
  };

  render() {
    const { t, hideSocial } = this.props;

    return (
      <div className="subscribe-section">
        <Container>
          <Row>
            <Col className="my-5 pt-4 text-center">
              <h3 className="mb-4">{t('subscribeSection.title')}</h3>
              <p className="mx-auto max-text">{t('subscribeSection.content')}</p>

              <Form inline className="my-5 max-text full-width mx-auto" method="POST" target="_blank" action="https://kumuluz.us12.list-manage.com/subscribe/post?u=e45cbf1dbe43e3d7bd15b3abd&amp;id=fc67f95a6b">
                <FormGroup className="mr-3 expand mb-0">
                  <Input type="email" name="EMAIL" id="subscribeEmail" placeholder={t('banner.subscribe.emailPlaceholder')} />
                </FormGroup>
                <Button color="primary" className="mx-auto">
                  {t('actions.subscribe')}
                </Button>
              </Form>

              {!hideSocial && (
                <div className="mx-auto">
                  <a href="https://t.me/kumuluz" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'telegram']} size="3x" className="mr-4 telegram" />
                  </a>
                  <a href="https://github.com/kumuluz" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="github" />
                  </a>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const SubscribeSection = withTranslation()(SubscribeSectionComponent);
