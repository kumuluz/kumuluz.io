import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, Footer } from '../../components';

@translate('other')
export default class TeamPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="team-page">
        <Banner simplified={true} title={t('team.title')} content={t('team.content')} />
        <SubscribeSection hideSocial={true} />
        <Footer />
      </div>
    );
  }
}
