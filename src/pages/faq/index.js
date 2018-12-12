import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, Footer } from '../../components';
import { FAQContent } from '../../components/sub-pages';

@translate('other')
export default class ContactPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="faq-page">
        <Banner simplified={true} title={t('faq.title')} content={t('faq.content')} />
        <FAQContent />
        <SubscribeSection hideSocial={true} />
        <Footer />
      </div>
    );
  }
}
