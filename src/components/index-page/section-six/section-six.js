import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import Link from 'gatsby-link';

import './section-six.scss';

const blocks = t => [
  {
    link: '/platform#security',
    title: t('sectionSix.advantages.security.title'),
    content: t('sectionSix.advantages.security.content')
  },
  {
    link: '/platform#cloud-abstraction',
    title: t('sectionSix.advantages.cloud.title'),
    content: t('sectionSix.advantages.cloud.content')
  },
  {
    link: '/platform#dlt',
    title: t('sectionSix.advantages.abstraction.title'),
    content: t('sectionSix.advantages.abstraction.content')
  },
  {
    link: '/platform#scalability',
    title: t('sectionSix.advantages.scalability.title'),
    content: t('sectionSix.advantages.scalability.content')
  },
  {
    link: '/platform#fault-tolerance',
    title: t('sectionSix.advantages.fault.title'),
    content: t('sectionSix.advantages.fault.content')
  },
  {
    link: '/platform#seamless-integration',
    title: t('sectionSix.advantages.seamlessIntegration.title'),
    content: t('sectionSix.advantages.seamlessIntegration.content')
  }  
];

@translate()
export class SectionSix extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-six mt-5 pt-5 mb-5">
        <Container>
          <Row>
            <Col className="mb-5 text-center">
              <h3>{t('sectionSix.title')}</h3>
            </Col>
          </Row>
          <Row>
            {blocks(t).map((block, i) => (
              <Col key={i} xs="12" md="6" lg="4" className="mb-5">
                <div className="px-2">
                  <h5 className="mb-3">{block.title}</h5>
                  <p className="mb-0" dangerouslySetInnerHTML={{ __html: block.content }} />
                  <Link to={block.link}>{t('actions.viewMore')}...</Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
