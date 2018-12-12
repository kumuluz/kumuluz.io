import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import imgOurStory2 from './our-story-2.jpg'
import imgOurStory3 from './our-story-3.jpg'
import imgOurStory4 from './our-story-4.png'
import imgDuke from './duke.png'
import imgEurocloud from '../../../assets/images/logos/eurocloud.png'
import imgStartup from '../../../assets/images/logos/startup.png'
import imgMicroprofile from './microprofile.png'

import './section-eight.scss';

@translate()
export class SectionEight extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="section-eight mt-5 pt-5 mb-5">
        <Container>
          <Row>
            <Col xs="12" lg="6">
              <Row>
                <Col xs="12" lg="5" className="mb-5">
                  <img src={imgOurStory2} alt="" className="img-fluid img-left" />
                </Col>
                <Col xs="12" lg="7" className="mb-5">
                  <img src={imgOurStory3} alt="" className="img-fluid img-left" />
                </Col>
                <Col xs="12" lg="12">
                  <img src={imgOurStory4} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Col>
            <Col className="p-3 microprofile">
              <h5>{t('sectionEight.subTitle')}</h5>
              <h3>{t('sectionEight.title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('sectionEight.content1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sectionEight.content2') }} />
              <h6 className="mb-0 mt-4">{t('sectionEight.memberOf')}</h6>
              <a href="https://microprofile.io/" target="_blank" rel="noopener noreferrer">
                <img src={imgMicroprofile} alt="Microprofile" className="img-fluid" />
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" md="4" lg="3" className="text-center p-4">
              <img src={imgDuke} alt={t('sectionEight.duke')} className="img-fluid mb-3" />
              <h6>{t('sectionEight.duke')}</h6>
            </Col>
            <Col xs="12" md="4" lg="3" className="text-center p-4">
              <img src={imgEurocloud} alt={t('sectionEight.eurocloud')} className="img-fluid mb-3" />
              <h6>{t('sectionEight.eurocloud')}</h6>
            </Col>
            <Col xs="12" md="4" lg="3" className="text-center p-4">
              <img src={imgStartup} alt={t('sectionEight.startup')} className="img-fluid mb-3" />
              <h6>{t('sectionEight.startup')}</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
