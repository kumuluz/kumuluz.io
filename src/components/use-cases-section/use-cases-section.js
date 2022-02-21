import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Checkbox } from '../../components';

import './use-cases-section.scss';

import { intendedFor } from '../../content/useCases';


class UseCasesSectionComponent extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      currentArticle: 1,
      width: 0,
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    if (typeof window !== "undefined") {
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }

  updateWindowDimensions() {
    if (typeof window !== "undefined") {
      this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
    }
  }

  goToArticle(article) {
    this.setState({
      ...this.state,
      currentArticle: article
    });
  }

  moveLeft() {
    this.setState({
      ...this.state,
      currentArticle: this.state.currentArticle - 1
    });
  }

  moveRight() {
    this.setState({
      ...this.state,
      currentArticle: this.state.currentArticle + 1
    });
  }

  renderArticle(q, key, blockWidth) {
    return (
      <div key={key} className={`block`} style={{ width: blockWidth - 1 + 'vw' }}>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h5>{q.subTitle}</h5>
            <h3>{q.title}</h3>
            <img src={q.image} alt="" className="img-fluid mb-4" />
            <p className="text-left">{q.content}</p>
          </div>

          <div className="d-flex">
            {q.facts.map((fact, k) => (
              <span key={k} className="fact">
                <Checkbox>{fact}</Checkbox>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { t } = this.props;
    const { currentArticle, width } = this.state;

    const allCases = intendedFor(t);

    let blockWidth = 30;
    let blockCount = allCases.length;
    let movePadding = 34;

    if (width >= 992 && width < 1200) {
      blockWidth = 45;
      movePadding = 3;
    }
    if (width < 992) {
      blockWidth = 82;
      movePadding = 7;
    }

    const minWidth = blockWidth * blockCount;
    const marginLeft = movePadding - blockWidth * currentArticle;

    const pages = [];
    for (let i = 0; i < allCases.length; i++) {
      pages.push(i);
    }

    return (
      <div className="use-cases-section">
        <Container fluid>
          <Row>
            <Col className="my-5 text-center">
              <h3>{t('useCasesSection.title')}</h3>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-hidden">
            <Col>
              <div className="blocks" style={{ minWidth: minWidth + 'vw', marginLeft: marginLeft + 'vw' }}>
                {allCases.map((article, key) => this.renderArticle(article, key, blockWidth))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="my-3 d-flex justify-content-center align-items-center">
              {currentArticle !== 0 && (
                <div className="mr-5 nav p-3">
                  <FontAwesomeIcon icon={'arrow-left'} size="2x" onClick={() => this.moveLeft()} />
                </div>
              )}
              {pages.map((page, key) => (
                <div
                  key={key}
                  className={`pager mx-1 mx-md-2 py-3 ${currentArticle === page ? 'active' : ''}`}
                  onClick={() => this.goToArticle(page)}
                />
              ))}
              {currentArticle + 1 !== blockCount && (
                <div className="ml-5 nav p-3">
                  <FontAwesomeIcon icon={'arrow-right'} size="2x" onClick={() => this.moveRight()} />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export const UseCasesSection = withTranslation()(UseCasesSectionComponent);
