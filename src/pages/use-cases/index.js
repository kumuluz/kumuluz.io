import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, Footer, UseCasesSection, PartnersSection, UseCasesBlocks } from '../../components';
import { AwardsSection, UseCasesStatsSection } from '../../components/sub-pages';

@translate('other')
export default class UseCasesPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="use-cases-page">
        <Banner simplified={true} title={t('useCases.title')} content={t('useCases.content')} />

        <UseCasesBlocks title={t('useCases.blocks.title')} content={t('useCases.blocks.content')} />

        <UseCasesStatsSection />

        <UseCasesSection />
        <PartnersSection all={true} />
        
        <br/><br/>
        <hr className="mt-5" style={{width: '400px'}} />

        <AwardsSection />

        <SubscribeSection hideSocial={true} />
        <Footer />
      </div>
    );
  }
}
