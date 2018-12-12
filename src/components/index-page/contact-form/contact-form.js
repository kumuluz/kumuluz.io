import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { SocialLinks } from '../../../components';

import './contact-form.scss';

const downloadLinks = t => [
  {
    link: '',
    text: t('contact.moreInfo.whitepaper')
  },
  {
    link: '',
    text: t('contact.moreInfo.businessOverview')
  },
  {
    link: '',
    text: t('contact.moreInfo.presentation')
  },
  {
    link: 'https://blog.kumuluz.com',
    text: t('contact.moreInfo.blog'),
    newTab: true
  },
  {
    link: '/faq',
    text: t('contact.moreInfo.faq')
  }
];

@translate()
export class ContactForm extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <Container className="mt-5 pt-5 contact-form">
        <Row>
          <Col className="my-5 text-center">
            <h3>{t('contact.title')}</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" md="10" lg="8">
            <Form className="mr-0 mr-lg-5 mb-5">
              <FormGroup>
                <Label for="name">{t('contact.form.name')}</Label>
                <Input type="text" name="name" id="name" placeholder={t('contact.form.namePlaceholder')} />
              </FormGroup>
              <FormGroup>
                <Label for="email">{t('contact.form.email')}</Label>
                <Input type="email" name="email" id="email" placeholder={t('contact.form.emailPlaceholder')} />
              </FormGroup>
              <FormGroup>
                <Label for="message">{t('contact.form.message')}</Label>
                <Input type="textarea" name="message" id="message" placeholder={t('contact.form.messagePlaceholder')} />
              </FormGroup>
              <div className="d-flex justify-content-center">
                  <Button color="primary">{t('actions.submit')}</Button>
              </div>
            </Form>
          </Col>
          {/*<Col xs="12" md="8" lg="6">*/}
            {/*<div className="more-info">*/}
              {/*<p dangerouslySetInnerHTML={{ __html: t('contact.moreInfo.content') }} />*/}
              {/*{downloadLinks(t).map((l, k) => (*/}
                {/*<a key={k} href={l.link} target={l.newTab ? '_blank' : null} rel={l.newTab ? 'noreferrer noopener' : null}>*/}
                  {/*<i>*/}
                    {/*<FontAwesomeIcon icon="arrow-down" />*/}
                  {/*</i>*/}
                  {/*<span dangerouslySetInnerHTML={{ __html: l.text }} />*/}
                {/*</a>*/}
              {/*))}*/}
            {/*</div>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    );
  }
}
