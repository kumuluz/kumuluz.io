import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTranslation} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';

import imgSunesisAward from './sunesis-award.jpg'
import logoJavaChampion from './java-champion.png'
import logoIbmChampion from './ibm-champion.png'
import logoOracleAce from './oracle-ace.jpg'

import logoBookDesignPrinciples from './books/design-principles.png'
import logoBookWsBpel from './books/ws-bpel.png'
import logoBookSoa from './books/soa.png'
import logoBookWsBpelSoa from './books/ws-bpel-soa.png'
import logoBookwsBpelOracle from './books/ws-bpel-oracle.png'
import logoBookOracleFusion from './books/oracle-fusion.png'
import logoBookBpdSoa from './books/bpd-soa.png'
import logoBookSoaIntegration from './books/soa-integration.png'
import logoBookCookbook from './books/cookbook.png'
import logoBookBpelWs from './books/bpel-ws.png'
import logoBookBpelPourLess from './books/bpel-pour-less.png'
import logoBookJ2ee from './books/j2ee.png'
import logoBookProJ2ee from './books/pro-j2ee.png'
import logoBookProEjb from './books/pro-ejb.png'
import logoBookVbnet from './books/vbnet.png'
import logoBookJavaGems from './books/java-gems.png'
import logoBookTechSbs from './books/tech-sbs.png'

import './vision-section.scss';

const books = [
    {
        image: logoBookDesignPrinciples,
        href: 'https://www.packtpub.com/application-development/business-process-driven-soa-12c-using-bpmn-and-bpel',
        title: 'Design Principles for Process-driven Architectures'
    },
    {
        image: logoBookWsBpel,
        href: 'https://www.packtpub.com/application-development/ws-bpel-20-beginners-guide',
        title: "WS-BPEL 2.0 Beginner's Guide"
    },
    {
        image: logoBookSoa,
        href: 'http://www.packtpub.com/soa-integration-automation-business-processes-books-best-of-packt/book',
        title: 'Do more with SOA Integration'
    },
    {
        image: logoBookWsBpelSoa,
        href: 'https://www.packtpub.com/ws-bpel-2-0-for-soa-composite-applications-with-ibm-websphere-7/book',
        title: 'WS-BPEL 2.0 for SOA Composite Applications with IBM WebSphere 7'
    },
    {
        image: logoBookwsBpelOracle,
        href: 'https://www.packtpub.com/ws-bpel-2-0-for-soa-with-oracle-soa-suite-11g/book',
        title: 'WS-BPEL 2.0 for SOA Composite Applications with Oracle SOA Suite 11g'
    },
    {
        image: logoBookOracleFusion,
        href: 'https://www.packtpub.com/enterprise-solution-architecture-patterns-by-oracle-fusion-middleware/book',
        title: 'Oracle Fusion Middleware Patterns'
    },
    {
        image: logoBookBpdSoa,
        href: 'http://www.packtpub.com/business-process-driven-SOA-using-BPMN-and-BPEL/book',
        title: 'Business Process Driven SOA using BPMN and BPEL'
    },
    {
        image: logoBookSoaIntegration,
        href: 'http://www.packtpub.com/soa-approach-to-integration/book',
        title: 'SOA Approach to Integration'
    },
    {
        image: logoBookCookbook,
        href: 'http://www.packtpub.com/BPEL-SOA/book',
        title: 'BPEL Cookbook – Best Practices for SOA-based integration and composite applications development '
    },
    {
        image: logoBookBpelWs,
        href: 'https://www.packtpub.com/business-process-execution-language-web-services-2nd-edition/book',
        title: 'Business Process Execution Language for Web Services, 2nd edition'
    },
    {
        image: logoBookBpelPourLess,
        href: 'http://www.packtpub.com/bpel2e-FR/book',
        title: 'BPEL pour les services web : Deuxième Edition'
    },
    {
        image: logoBookJ2ee,
        href: 'http://www.amazon.com/gp/product/1861005288/002-8787342-7774461?v=glance&n=283155',
        title: 'J2EE Design Patterns Applied'
    },
    {
        image: logoBookProJ2ee,
        href: 'http://www.amazon.com/gp/product/186100544X/002-8787342-7774461?v=glance&n=283155',
        title: 'Professional J2EE EAI'
    },
    {
        image: logoBookProEjb,
        href: 'http://www.amazon.com/gp/product/1861005083/002-8787342-7774461?v=glance&n=283155',
        title: 'Professional EJB'
    },
    {
        image: logoBookVbnet,
        href: 'http://www.amazon.com/gp/product/1861008007/002-8787342-7774461?v=glance&n=283155#18610080074000',
        title: ''
    },
    {
        image: logoBookJavaGems,
        href: '',
        title: 'More Java Gems'
    },
    {
        image: logoBookTechSbs,
        href: '',
        title: 'Technology Supporting Business Solutions'
    }
];

class VisionSectionComponent extends Component {
    static propTypes = {
        t: PropTypes.func
    };
    
    render() {
        const {t} = this.props;
        
        return (
            <div className="vision-section pt-5 mb-5">
                <Container>
                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-5 mb-5">
                        <Col xs="12" lg="6" className="pr-lg-5">
                            <h5>{t('visionSection.subTitle')}</h5>
                            <h3>{t('visionSection.title')}</h3>
                            <p dangerouslySetInnerHTML={{__html: t('visionSection.content1')}}/>
                            <p dangerouslySetInnerHTML={{__html: t('visionSection.content2')}}/>
                            <p dangerouslySetInnerHTML={{__html: t('visionSection.content3')}}/>
                            <p dangerouslySetInnerHTML={{__html: t('visionSection.content4')}}/>
                        </Col>
                        <Col xs="12" lg="6" className="pl-lg-5 pt-5">
                            <img src={imgSunesisAward} alt="" className="img-fluid img-right mb-5"/>
                            <br/>
                            <br/>
                            <br/>
                            <h6>{t('visionSection.awards')}</h6>
                            <Row className="text-center">
                                <Col xs="12">
                                    <img src={logoJavaChampion} alt="" className="img-fluid mb-3"/>
                                </Col>
                                <Col xs="6">
                                    <img src={logoOracleAce} alt="" className="img-fluid"/>
                                </Col>
                                <Col xs="6">
                                    <img src={logoIbmChampion} alt="" className="img-fluid"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>{t('visionSection.books')}</h6>
                            <div className="books d-block d-lg-flex">
                                {books.map((book, k) => (
                                    <div key={k}>
                                        <a href={book.href} target="_blank" rel="noopener noreferrer">
                                            <img src={book.image} alt={book.title} title={book.title}
                                                className="img-fluid"/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export const VisionSection = withTranslation()(VisionSectionComponent);
