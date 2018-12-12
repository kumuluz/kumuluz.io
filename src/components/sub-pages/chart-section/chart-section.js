import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { DonutChart } from '../../../components';

import './chart-section.scss';

export class ChartSection extends Component {
  static propTypes = {
    title: PropTypes.string,
    distribution: PropTypes.array,
    reverse: PropTypes.bool,
    rotation: PropTypes.number
  };

  render() {
    const { title, distribution, reverse, rotation } = this.props;

    const order = reverse ? [2, 1] : [1, 2];

    return (
      <Container className="chart-section">
        <Row className="align-items-center mb-5">
          <Col xs="12" lg={{size: 5, order: order[0]}} className="pt-4">
            <DonutChart values={distribution} rotation={rotation} />
          </Col>
          <Col xs="12" lg={{size: 7, order: order[1]}}>
            <h5>{title}</h5>
            <Row>
            {distribution.map((dis, key) => (
              <Col key={key} xs="12" sm="6" className="mb-2">
                <FontAwesomeIcon icon="square" size="lg" style={{ color: dis.color }} />
                <span className="title">{dis.title}</span>
                <span className="percentage">{Math.round(dis.percentage * 100)}%</span>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
