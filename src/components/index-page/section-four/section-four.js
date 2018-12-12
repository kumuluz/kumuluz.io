import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';

import iconDapis from './icon-dAPIs.svg'
import iconPrebuildDapis from './icon-prebuilt-dapis.svg'
import iconMarketplace from './icon-marketplace.svg'
import iconCommunity from './icon-community.svg'
import iconToken from './icon-token.svg'
import iconSmartContracts from './icon-smart-contracts.svg'

import './section-four.scss';

const blocks = t => [
  {
    link: '/platform',
    icon: iconDapis,
    title: t('sectionFour.dAPIs.title'),
    content: t('sectionFour.dAPIs.content')
  },
  {
    link: '/platform',
    icon: iconPrebuildDapis,
    title: t('sectionFour.pre-dAPIs.title'),
    content: t('sectionFour.pre-dAPIs.content')
  },
  {
    link: '/platform',
    icon: iconMarketplace,
    title: t('sectionFour.marketplace.title'),
    content: t('sectionFour.marketplace.content')
  },
  {
    link: '/platform#community',
    icon: iconCommunity,
    title: t('sectionFour.community.title'),
    content: t('sectionFour.community.content')
  },
  {
    link: '/platform#dlt',
    icon: iconSmartContracts,
    title: t('sectionFour.smartContracts.title'),
    content: t('sectionFour.smartContracts.content')
  }
];

@translate()
export class SectionFour extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-four mt-5 pt-5">
        <Container>
          <Row>
            {blocks(t).map((block, i) => (
              <Col key={i} xs="12" lg="6" className="mb-5 pb-5">
                <div className="block px-4 text-center">
                  <div>
                    <div className="icon mb-5">
                      <img src={block.icon} alt={block.title} className="img-fluid" />
                    </div>
                    <h4 className="mb-4" dangerouslySetInnerHTML={{ __html: block.title }} />
                    <p className="mb-5" dangerouslySetInnerHTML={{ __html: block.content }} />
                  </div>
                    {!block.hideShowMore ? (
                      <Link className="btn btn-primary" to={block.link}>
                        {t('actions.moreInfo')}
                      </Link>
                    ): null}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
