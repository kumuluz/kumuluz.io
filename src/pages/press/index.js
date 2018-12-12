import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Banner, SubscribeSection, Footer } from '../../components';
import { MediaKit } from '../../components/sub-pages';
import { Container, Row, Col, Button } from 'reactstrap';
import moment from 'moment';

import { articles } from '../../content/articles';

import './index.scss';

@translate(['other', 'translations'])
export default class PressPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    const ars = articles
      .map(a => {
        a.date = moment(a.date);
        return a;
      })
      .sort((a, b) => {
        return moment(b.date).format('X') - moment(a.date).format('X');
      })
      .slice(0, 6);

    this.state = {
      articles: ars
    };
  }

  loadMore() {
    const ars = articles
      .map(a => {
        a.date = moment(a.date);
        return a;
      })
      .sort((a, b) => {
        return moment(b.date).format('X') - moment(a.date).format('X');
      });

    this.setState({
      articles: ars
    });
  }

  render() {
    const { t } = this.props;
    const { articles } = this.state;
    return (
      <div className="press-page">
        <Banner simplified={true} title={t('press.title')} content={t('press.content')} />

        <div className="dark-section py-5">
          <Container className="py-5">
            <Row>
              {articles.map((a, k) => (
                <Col key={k} xs="12" md="6" className="mb-5 animated fadeInUp">
                  <h6>{moment(a.date).format('MMMM YYYY')}</h6>
                  <h4>{a.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: a.content }} />
                </Col>
              ))}
            </Row>
            {articles.length <= 6 && (
              <Row>
                <Col className="text-center">
                  <Button outline color="secondary" onClick={() => this.loadMore()}>
                    {t('translations:actions.loadMore')}
                  </Button>
                </Col>
              </Row>
            )}
          </Container>
        </div>

        <MediaKit />

        <SubscribeSection hideSocial={true} />
        <Footer />
      </div>
    );
  }
}
