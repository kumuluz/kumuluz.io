import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import avatarEdvardSimec from './edvard_simec.jpg'
import avatarPavelSkerlj from './pavel-sk.jpg'
import avatarToneCerne from './tone_cerne.png'
import iconAppStore from './appstore-badge.svg'
import iconQuoteLeft from './quote-left.svg'
import iconQuoteRight from './quote-right.svg'

import './testemonials-section.scss';

const quotes = t => [
  {
    avatar: avatarEdvardSimec,
    author: t('testemonialsSection.quotes.EdvardSimec.author'),
    company: t('testemonialsSection.quotes.EdvardSimec.company'),
    content: <p className="text-center" dangerouslySetInnerHTML={{ __html: t('testemonialsSection.quotes.EdvardSimec.quote') }} />
  },
  {
    avatar: avatarPavelSkerlj,
    author: t('testemonialsSection.quotes.PavelSkerlj.author'),
    company: t('testemonialsSection.quotes.PavelSkerlj.company'),
    content: (
      <span>
        <p className="text-center m-0" dangerouslySetInnerHTML={{ __html: t('testemonialsSection.quotes.PavelSkerlj.quote') }} />
        <Row className="mb-4">
          <Col className="pr-0">
            <a href="https://itunes.apple.com/si/app/na-poti/id1249977118?ls=1&mt=8" target="_blank" className="d-block p-2">
              <img
                className="img-fluid"
                alt="Download on the App Store"
                src={iconAppStore}
                style={{maxHeight: '37px'}}
              />
            </a>
          </Col>
          <Col className="pl-0">
            <a href="https://play.google.com/store/apps/details?id=si.petrol.napoti&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
              <img
                className="img-fluid"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
              />
            </a>
          </Col>
        </Row>
      </span>
    )
  },
  {
    avatar: avatarToneCerne,
    author: t('testemonialsSection.quotes.ToneCerne.author'),
    company: t('testemonialsSection.quotes.ToneCerne.company'),
    content: <p className="text-center" dangerouslySetInnerHTML={{ __html: t('testemonialsSection.quotes.ToneCerne.quote') }} />
  }
];

@translate()
export class TestemonialsSection extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      width: 0,
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
  }

  goToPage(page) {
    this.setState({
      ...this.state,
      currentPage: page
    });
  }

  render() {
    const { t } = this.props;
    const { currentPage, width } = this.state;

    let perPage = 3;
    if (width >= 768 && width < 1200) perPage = 2;
    if (width < 768) perPage = 1;
    const allQuotes = quotes(t);
    const currentQuotes = allQuotes.slice(currentPage * perPage, currentPage * perPage + perPage);

    const pages = [];
    for (let i = 0; i < Math.ceil(allQuotes.length / perPage); i++) {
      pages.push(i);
    }

    return (
      <div className="testemonials-section">
        <div className="background" />
        <Container>
          <Row>
            <Col className="my-5 text-center">
              <h3>{t('testemonialsSection.title')}</h3>
            </Col>
          </Row>
          <Row>
            {currentQuotes.map((q, key) => (
              <Col xs="12" md="6 " xl="4" key={key}>
                <div className="block">
                  {((key + 1) % perPage == 1 || perPage === 1) && <img src={iconQuoteLeft} className="quote-left" />}
                  {((key + 1) % perPage == 0 || perPage === 1) && <img src={iconQuoteRight} className="quote-right" />}
                  {q.content}
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={q.avatar} alt={q.author} className="img-fluid avatar" />
                    <div>
                      <div className="author">{q.author}</div>
                      <div className="company">{q.company}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="my-5 d-flex justify-content-center">
              {pages.map((page, key) => (
                <div key={key} className={`pager mx-2  ${currentPage === page ? 'active' : ''}`} onClick={() => this.goToPage(page)} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
