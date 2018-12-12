import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './timeline.scss';

export class Timeline extends Component {
  static propTypes = {
    events: PropTypes.array,
    title: PropTypes.string
  };

  render() {
    const { title, events } = this.props;

    return (
      <div className="timeline-section">
        <Container>
          <Row>
            <Col className="my-5 text-center">
              <h3>{title}</h3>
            </Col>
          </Row>
        </Container>
        <Container className={`timeline `}>
          <Row>
            {events.map((event, key) => (
              <Col key={key} xs="12" lg={{ offset: key % 2 === 1 ? 0 : 6, size: 6 }}>
                <div className={`event px-5 ${key % 2 === 1 ? 'left' : 'right'}`}>
                  <div className="time">{event.time}</div>
                  <h5 dangerouslySetInnerHTML={{ __html: event.title }} />
                  <div className="content">{event.content}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
