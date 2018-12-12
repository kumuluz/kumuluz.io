import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './quote-section.scss';

export class QuoteSection extends Component {
  static propTypes = {
    quote: PropTypes.any,
    author: PropTypes.string,
    company: PropTypes.string
  };

  render() {
    const { quote, author, company } = this.props;

    return (
      <div className="quote-section mt-5 pt-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="mb-5 text-center quote">
              <p className="content">{quote}</p>
              {author && <p className="author mb-1">{author}</p>}
              {company && <p className="company">{company}</p>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
