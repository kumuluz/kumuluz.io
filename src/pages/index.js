import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, QuoteSection, Footer, UseCasesSection, PartnersSection } from '../components';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
  SectionEight,
  TestemonialsSection,
  SectionTen,
  ContactForm,
  VisionSection,
  LogosSection
} from '../components/index-page';

import './index.scss';
import { UseCasesStatsSection } from '../components/sub-pages';

@translate()
export default class IndexPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;
    return (
      <div className="index">
        <Banner />
        <SectionTen />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionEight />
        <SectionSeven />
        <SubscribeSection />
        <SectionSix />
        <QuoteSection quote={t('quoteSection.quote')} author={t('quoteSection.author')} company={t('quoteSection.company')} />
        <LogosSection />
        <UseCasesStatsSection compact={true} />
        <UseCasesSection />
        <TestemonialsSection />
        <PartnersSection />
        <VisionSection />
        <SubscribeSection hideSocial={true} />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
