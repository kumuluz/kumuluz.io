import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import iconDecentralization from './icon-decentralization.svg'
import iconProductivity from './icon-productivity.svg'
import iconFlexibility from './icon-flexibility.svg'
import iconReliability from './icon-reliability.svg'

import './section-two.scss';

const advantages = t => [
  {
    icon: iconDecentralization,
    title: t('sectionTwo.decentralization.title'),
    description: t('sectionTwo.decentralization.description')
  },
  {
    icon: iconProductivity,
    title: t('sectionTwo.productivity.title'),
    description: t('sectionTwo.productivity.description')
  },
  {
    icon: iconFlexibility,
    title: t('sectionTwo.flexibility.title'),
    description: t('sectionTwo.flexibility.description')
  },
  {
    icon: iconReliability,
    title: t('sectionTwo.alwaysOn.title'),
    description: t('sectionTwo.alwaysOn.description')
  }
];

@translate()
export class SectionTwo extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-two mt-5 pt-5">
        <Container>
          <Row>
            {advantages(t).map((adv, i) => (
              <Col key={i} xs="12" lg="6" className="mb-4">
                <div className="box d-block d-sm-flex">
                  <div className="img mx-auto mb-3 mb-sm-0 mr-sm-3">
                    <img src={adv.icon} alt={adv.title} className="img-fluid" />
                  </div>
                  <div>
                    <h5>{adv.title}</h5>
                    <p>{adv.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
