import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, Footer } from '../../components';
import { Timeline } from '../../components/sub-pages';
import { Container, Row, Col } from 'reactstrap';

import { eventsInPast, eventsInFuture } from '../../content/events';

import './index.scss';

@translate('roadmap')
export default class RoadmapPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      showPast: false
    };

    this.togglePast = this.togglePast.bind(this);
  }

  togglePast() {

    this.setState(prevState => ({
      showPast: !prevState.showPast
    }));
  }

  render() {
    const { t } = this.props;
    const { showPast } = this.state;

    return (
      <div className="roadmap-page">
        <Banner simplified={true} title={t('banner.title')} content={t('banner.content')} />

        <Container>
          <Row>
            <Col className="my-5 text-center">
              <h4><a onClick={this.togglePast} className="past-toggle">
                { showPast ? t('toggle.hide') : t('toggle.show') }
              </a></h4>
            </Col>
          </Row>
        </Container>

        { showPast && <Timeline title={t('timeline.title')} events={eventsInPast(t)} />}

        <Timeline title={t('upcoming.title')} events={eventsInFuture(t)} />
        <br />
        <br />

        <SubscribeSection hideSocial={true} />
        <Footer />
      </div>
    );
  }
}
