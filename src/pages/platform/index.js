import React, {useState} from 'react';
import {Banner, SubscribeSection, Footer, QuoteSection, Checkbox, DecentralizedImage} from '../../components';
import {Container, Row, Col} from 'reactstrap';
import {SideMenu} from '../../components/sub-pages';
import scrollToElement from 'scroll-to-element';
import {Waypoint} from 'react-waypoint';

import imgDapisPluses from './dapis-pluses.svg';
import imgMarketplaceDevelopers from './marketplace-developers.svg';
import imgTechnologyHierarchy from './technology-hierarchy.svg';

import logoJava from '../../assets/images/logos/java.png'
import logoNode from '../../assets/images/logos/node.png'
import logoGo from '../../assets/images/logos/go.png'
import logoKotlin from '../../assets/images/logos/kotlin.png'
import logoPython from '../../assets/images/logos/python.png'
import logoCs from '../../assets/images/logos/cs.png'
import logoGolem from '../../assets/images/logos/golem.png'
import logoSonm from '../../assets/images/logos/sonm.png'
import logoAws from '../../assets/images/logos/aws.png'
import logoGae from '../../assets/images/logos/gae.png'
import logoAzure from '../../assets/images/logos/azure.png'
import logoStorej from '../../assets/images/logos/storj.svg'
import logoFilecoin from '../../assets/images/logos/filecoin.png'
import logoBigchain from '../../assets/images/logos/bigchain.png'
import logoEos from '../../assets/images/logos/eos.png'
import logoKubernetes from '../../assets/images/logos/kubernetes.png'
import logoDocker from '../../assets/images/logos/docker.png'
import logoPsd2 from '../../assets/images/logos/psd2.png'
import logoSwift from '../../assets/images/logos/swift.png'
import logoSepa from '../../assets/images/logos/sepa.png'
import logoIot from '../../assets/images/logos/iot.png'
import logoIndustry4 from '../../assets/images/logos/industry-4-0.png'
import logoEthereum from '../../assets/images/logos/ethereum.png'
import logoBitcoin from '../../assets/images/logos/bitcoin.png'
import logoHyperledger from '../../assets/images/logos/hyperledger.png'
import logoR3corda from '../../assets/images/logos/r3-corda.jpg'

import './index.scss';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../../layouts";

const menuItems = t => [
    {
        key: 'dAPIs',
        name: t('sidebar.dAPIs'),
        children: [
            {key: 'security', name: t('sidebar.advancedSecurity')},
            {key: 'cloud-abstraction', name: t('sidebar.cloudAbstraction')},
            {key: 'dlt', name: t('sidebar.dlt')},
            {key: 'seamless-integration', name: t('sidebar.seamlessIntegration')}
        ]
    },
    {key: 'prebuilt-dAPIs', name: t('sidebar.prebuiltdAPIs')},
    {key: 'marketplace', name: t('sidebar.marketplace')},
    {key: 'community', name: t('sidebar.community')},
    {key: 'smart-contracts', name: t('sidebar.smartContracts')}
];

const concepts = t => [
    {title: t('concepts.decentalized.title'), content: t('concepts.decentalized.content')},
    {title: t('concepts.serverless.title'), content: t('concepts.serverless.content')},
    {title: t('concepts.containerized.title'), content: t('concepts.containerized.content')},
    {title: t('concepts.cloudNative.title'), content: t('concepts.cloudNative.content')},
    {title: t('concepts.fog.title'), content: t('concepts.fog.content')},
    {title: t('concepts.kubernetes.title'), content: t('concepts.kubernetes.content')}
];

const features = t => [
    {title: t('features.protocols.title'), content: t('features.protocols.content')},
    {title: t('features.streaming.title'), content: t('features.streaming.content')},
    {title: t('features.reactive.title'), content: t('features.reactive.content')},
    {title: t('features.peerToPeer.title'), content: t('features.peerToPeer.content')},
    {title: t('features.config.title'), content: t('features.config.content')},
    {title: t('features.nanoApi.title'), content: t('features.nanoApi.content')},
    {title: t('features.health.title'), content: t('features.health.content')},
    {title: t('features.logging.title'), content: t('features.logging.content')},
    {title: t('features.management.title'), content: t('features.management.content')},
    {title: t('features.devops.title'), content: t('features.devops.content')}
];

export default function TechnologyPage() {
    const {t} = useI18next("platform");
    
    const [menuItem, setMenuItem] = useState(null);
    
    function waypointEntered(waypoint) {
        setMenuItem(waypoint);
    }
    
    function menuItemSelected(menuItem) {
        scrollToElement('#' + menuItem);
        setMenuItem(menuItem);
    }
    
    function renderdAPIsSection(t) {
        const langLogos = [
            {
                name: 'java',
                img: logoJava
            },
            {
                name: 'node',
                img: logoNode
            },
            {
                name: 'go',
                img: logoGo
            },
            {
                name: 'kotlin',
                img: logoKotlin
            },
            {
                name: 'python',
                img: logoPython
            },
            {
                name: 'cs',
                img: logoCs
            }
        ]
        
        return (
            <span>
                <Waypoint onEnter={() => waypointEntered('dAPIs')}/>
                <h3 id="dAPIs" className="mt-5 mt-lg-auto" dangerouslySetInnerHTML={{__html: t('dAPIs.title')}}/>
                <p dangerouslySetInnerHTML={{__html: t('dAPIs.about')}}/>
                <img src={imgDapisPluses} alt="" className="img-fluid my-3"/>
                <hr/>
                
                <p id="decentralization" dangerouslySetInnerHTML={{__html: t('dAPIs.trulyDecentralized')}}/>
                <div className="bg-light-grey p-3">
                    <DecentralizedImage/>
                </div>
                
                <hr/>
                <h4>{t('concepts.title')}</h4>
                <Row>
                    {concepts(t).map((concept, key) => (
                        <Col key={key} xs="12" lg="6">
                            <h6>{concept.title}</h6>
                            <p>{concept.content}</p>
                        </Col>
                    ))}
                </Row>
                <hr/>
                
                <h4>{t('features.title')}</h4>
                <Row>
                    {features(t).map((concept, key) => (
                        <Col key={key} xs="12" lg="6">
                            <h6>{concept.title}</h6>
                            <p>{concept.content}</p>
                        </Col>
                    ))}
                </Row>
                <hr/>
                
                <h4>{t('programmingLanguages.title')}</h4>
                <p>{t('programmingLanguages.content')}</p>
                <Row>
                    {langLogos.map((cb, key) => (
                        <Col key={key} xs="12" sm="6" lg="4" className="mb-3 pb-3">
                            <Checkbox className="align-items-center">
                                <img src={cb.img} alt="" className="img-fluid img-55 mx-2"/>{' '}
                                {t(`programmingLanguages.langs.${cb.name}`)}
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                <p>{t('programmingLanguages.content2')}</p>
                <hr/>
                
                <h4 id="scalability">{t('scalability.title')}</h4>
                <p>{t('scalability.content')}</p>
                <Row className="mt-5">
                    {['horizontal', 'elasticity', 'latency', 'performance', 'userDemand', 'dataLoad'].map((cb, key) => (
                        <Col key={key} xs="12" sm="6" className="mb-3 pb-3">
                            <Checkbox>{t(`scalability.checkboxes.${cb}`)}</Checkbox>
                        </Col>
                    ))}
                </Row>
                <hr/>
                
                <h4 id="fault-tolerance">{t('faultTolerance.title')}</h4>
                <p>{t('faultTolerance.content')}</p>
                <Row className="mt-5">
                    {['circuitBreakers', 'bulkheads', 'timeout', 'retry', 'fallback', 'failFast'].map((cb, key) => (
                        <Col key={key} xs="12" sm="6" lg="4" xl="4" className="mb-3 pb-3">
                            <Checkbox>{t(`faultTolerance.checkboxes.${cb}`)}</Checkbox>
                        </Col>
                    ))}
                </Row>
                <hr/>
                
                <Waypoint onEnter={() => waypointEntered('security')} bottomOffset="50%"/>
                <h3 id="security">{t('security.title')}</h3>
                <p>{t('security.content')}</p>
                <ul>{['protocol', 'proof', 'oauth', 'federation', 'gdpr'].map((li, key) => <li
                    key={key}>{t(`security.points.${li}`)}</li>)}</ul>
                <Row className="mt-5">
                    {['security', 'simple', 'gdpr'].map((cb, key) => (
                        <Col key={key} xs="12" sm="6" lg="4" className="mb-3 pb-3">
                            <Checkbox>{t(`security.checkboxes.${cb}`)}</Checkbox>
                        </Col>
                    ))}
                </Row>
                <hr/>
                
                <Waypoint onEnter={() => waypointEntered('cloud-abstraction')} bottomOffset="50%"/>
                <h3 id="cloud-abstraction">{t('cloudAbstraction.title')}</h3>
                
                <p dangerouslySetInnerHTML={{__html: t('security.content2')}}/>
                <p dangerouslySetInnerHTML={{__html: t('security.runAnywhere')}}/>
                <p dangerouslySetInnerHTML={{__html: t('security.deploy')}}/>
                
                <hr/>
                <div className="highlight-section">{t('security.highlight')}</div>
                <hr/>
                
                <p>
                    <b>{t('cloudAbstraction.risk.title')}</b>
                </p>
                <p>{t('cloudAbstraction.risk.content1')}</p>
                <p>{t('cloudAbstraction.risk.content2')}</p>
                <p>{t('cloudAbstraction.risk.content3')}</p>
                
                <br/>
                <p>
                    <b>{t('cloudAbstraction.solution.title')}</b>
                </p>
                <p dangerouslySetInnerHTML={{__html: t('cloudAbstraction.solution.content1')}}/>
                <p dangerouslySetInnerHTML={{__html: t('cloudAbstraction.solution.content2')}}/>
                <ul>
                    {['cloud', 'file', 'database'].map((point, key) => (
                        <li key={key}
                            dangerouslySetInnerHTML={{__html: t(`cloudAbstraction.solution.points.${point}`)}}/>
                    ))}
                </ul>
                
                <div className="images">
                    <Row className="mt-5 justify-content-center">
                        {[
                            logoGolem,
                            logoSonm,
                            logoAws,
                            logoGae,
                            logoAzure,
                            logoStorej,
                            logoFilecoin,
                            logoBigchain,
                            logoEos,
                            logoKubernetes,
                            logoDocker
                        ].map((img, key) => (
                            <Col key={key} xs="6" sm="3" className="d-flex align-items-center">
                                <img src={img} alt="" className="img-fluid"/>
                            </Col>
                        ))}
                    </Row>
                </div>
                <hr/>
                
                <Waypoint onEnter={() => waypointEntered('dlt')} bottomOffset="50%"/>
                <h3 id="dlt">{t('dlt.title')}</h3>
                <p>{t('dlt.content')}</p>
                
                <hr/>
                <div className="highlight-section">{t('security.highlight')}</div>
                <hr/>
                
                <p>
                    <b>{t('dlt.risk.title')}</b>
                </p>
                <p>{t('dlt.risk.content1')}</p>
                <p>{t('dlt.risk.content2')}</p>
                <p>{t('dlt.risk.content3')}</p>
                <br/>
                <p>
                    <b>{t('dlt.solution.title')}</b>
                </p>
                <p>{t('dlt.solution.content')}</p>
                <hr/>
                
                <Row>
                    {['private', 'permissioned', 'pow', 'hidden', 'once'].map((cb, key) => (
                        <Col key={key} xs="12" lg="6" className="mb-3 pb-3">
                            <Checkbox>{t(`dlt.solution.checkboxes.${cb}`)}</Checkbox>
                        </Col>
                    ))}
                </Row>
                
                <hr/>
                
                <Row>
                    {['dlt', 'smart', 'events', 'explorer', 'token', 'transaction'].map((p, key) => (
                        <Col key={key} xs="12" md="6" xl="4" className="mb-3 mb-lg-0">
                            <h6>{t(`dlt.solution.points.${p}`)}</h6>
                        </Col>
                    ))}
                </Row>
                
                <br/>
                <div className="images">
                    <Row className="mt-5 justify-content-center">
                        {[logoEthereum, logoBitcoin, logoHyperledger, logoR3corda].map((img, key) => (
                            <Col key={key} xs="6" sm="3" className="d-flex align-items-center">
                                <img src={img} alt="" className="img-fluid"/>
                            </Col>
                        ))}
                    </Row>
                </div>
                
                <hr/>
                
                <Waypoint onEnter={() => waypointEntered('seamless-integration')} bottomOffset="50%"/>
                <h3 id="seamless-integration">{t('seamlessIntegration.title')}</h3>
                <p>{t('seamlessIntegration.content1')}</p>
                <p>{t('seamlessIntegration.content2')}</p>
                <ul>
                    {['crypto', 'fiat', 'enterprise', 'erp', 'crm', 'scm', 'b2b', 'iot', 'bigData'].map((p, key) => (
                        <li key={key}>{t(`seamlessIntegration.points.${p}`)}</li>
                    ))}
                </ul>
                
                <div className="images">
                    <Row className="mt-5 justify-content-center">
                        {[logoPsd2, logoSwift, logoSepa, logoIot, logoIndustry4].map((img, key) => (
                            <Col key={key} xs="4" sm="3" md="2" className="d-flex align-items-center">
                                <img src={img} alt="" className="img-fluid mx-auto"/>
                            </Col>
                        ))}
                    </Row>
                </div>
                
                <hr/>
            </span>
        );
    }
    
    function renderPrebuiltdAPIsSection(t) {
        return (
            <span>
                <Waypoint onEnter={() => waypointEntered('prebuilt-dAPIs')} bottomOffset="50%"/>
                <h3 id="prebuilt-dAPIs" className="mt-5 mt-lg-auto"
                    dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.title')}}/>
                <p dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.content1')}}/>
                <p dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.content2')}}/>
                <p dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.content3')}}/>
                <br/>
                <h4>{t('prebuiltdAPIs.developed.title')}</h4>
                <Row>
                    {['userManagement', 'ccm', 'kyc'].map((cb, key) => (
                        <Col key={key} xs="12" sm="6" className="mb-3 pb-3">
                            <Checkbox>
                                <span className="no-transform"
                                    dangerouslySetInnerHTML={{__html: t(`prebuiltdAPIs.developed.checkboxes.${cb}`)}}/>
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                
                <hr/>
                <h4>{t('prebuiltdAPIs.pipeline.title')}</h4>
                <Row>
                    {[
                        'fiat',
                        'crypto',
                        'wallet',
                        'shoppingCart',
                        'order',
                        'fulfillment',
                        'invoice',
                        'billing',
                        'subscription',
                        'smart',
                        'catalogue',
                        'reporting',
                        'revision',
                        'transaction',
                        'cms',
                        'cdn',
                        'docVault',
                        'office'
                    ].map((cb, key) => (
                        <Col key={key} xs="12" sm="6" xl="4" className="mb-3 pb-3">
                            <Checkbox>
                                <span className="no-transform"
                                    dangerouslySetInnerHTML={{__html: t(`prebuiltdAPIs.pipeline.checkboxes.${cb}`)}}/>
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                
                <p dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.timeline')}}/>
                <Row className="mt-4">
                    <Col xs="12" md="6">
                        <div className="block" dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.developer')}}/>
                    </Col>
                    <Col xs="12" md="6">
                        <div className="block" dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.scheme')}}/>
                    </Col>
                </Row>
                <p dangerouslySetInnerHTML={{__html: t('prebuiltdAPIs.content4')}}/>
                
                <hr/>
            </span>
        );
    }
    
    function renderMarketplaceSection(t) {
        return (
            <span>
                <Waypoint onEnter={() => waypointEntered('marketplace')} bottomOffset="50%"/>
                <h3 id="marketplace" className="mt-5 mt-lg-auto">
                    {t('marketplace.title')}
                </h3>
                
                <div className="d-flex justify-content-center pb-5">
                    <img src={imgMarketplaceDevelopers} className="img-fluid"/>
                </div>
                <Row className="justify-content-center text-center pb-5">
                    <Col xs="12" lg="6">
                        <h5>{t('image.now.title')}</h5>
                        <p>{t('image.now.content')}</p>
                    </Col>
                    <Col xs="12" lg="6">
                        <h5>{t('image.withKumuluz.title')}</h5>
                        <p>{t('image.withKumuluz.content')}</p>
                    </Col>
                </Row>
                
                <p>{t('marketplace.content')}</p>
                
                <hr/>
            </span>
        );
    }
    
    function renderCommunitySection(t) {
        return (
            <span>
                <Waypoint onEnter={() => waypointEntered('community')} bottomOffset="50%"/>
                <h3 id="community">{t('community.title')}</h3>
                <p>{t('community.content')}</p>
                
                <h4 className="mt-5">{t('community.roles.title')}</h4>
                {['consumer', 'developer', 'miner'].map((role, key) => (
                    <span key={key}>
                        <p>
                            <b>{t(`community.roles.${role}.title`)}</b>
                        </p>
                        <p>{t(`community.roles.${role}.content`)}</p>
                    </span>
                ))}
                <hr/>
            </span>
        );
    }
    
    function renderSmartContractsSection(t) {
        return (
            <div id="smart-contracts">
                <Waypoint onEnter={() => waypointEntered('smart-contracts')} bottomOffset="50%"/>
                <img src="/images/index/section4-smart-contracts.svg" alt="" className="img-fluid mb-5 img-128"/>
                <h3 dangerouslySetInnerHTML={{__html: t('smartContracts.title')}}/>
                
                <p>{t('smartContracts.content1')}</p>
                <p>{t('smartContracts.content2')}</p>
                
                <h4 className="mt-5">{t('smartContracts.licencing.title')}</h4>
                <p>{t('smartContracts.licencing.content1')}</p>
                <p>{t('smartContracts.licencing.content2')}</p>
                <p>{t('smartContracts.licencing.content3')}</p>
                <ul>
                    {['usage', 'price', 'load', 'execution', 'other'].map((p, k) => <li
                        key={k}>{t(`smartContracts.licencing.points.${p}`)}</li>)}
                </ul>
                <p>{t('smartContracts.licencing.content4')}</p>
                
                <hr/>
                
                <h4 className="mt-5">{t('smartContracts.incentive.title')}</h4>
                <p dangerouslySetInnerHTML={{__html: t('smartContracts.incentive.content1')}}/>
                <ul>{['developers', 'miners'].map((p, k) => <li
                    key={k}>{t(`smartContracts.incentive.points.${p}`)}</li>)}</ul>
                <p dangerouslySetInnerHTML={{__html: t('smartContracts.incentive.content2')}}/>
            </div>
        );
    }
    
    return (
        <Layout>
            <div className="platform-page">
                <Banner simplified={true} title={t('banner.title')} content={t('banner.content')}/>
                
                <div className="d-flex justify-content-center py-5 bg-blue-700 px-3">
                    <Container>
                        <img src={imgTechnologyHierarchy} className="img-fluid"/>
                    </Container>
                </div>
                
                <QuoteSection quote={<span dangerouslySetInnerHTML={{__html: t('quote')}}/>}/>
                
                <SideMenu
                    selectedItem={menuItem}
                    menuItems={menuItems(t)}
                    menuHeader={<p>{t('sidebar.title')}</p>}
                    onSelect={menuItem => menuItemSelected(menuItem)}
                >
                    {renderdAPIsSection(t)}
                    {renderPrebuiltdAPIsSection(t)}
                    {renderMarketplaceSection(t)}
                    {renderCommunitySection(t)}
                    {renderSmartContractsSection(t)}
                </SideMenu>
                
                <SubscribeSection hideSocial={true}/>
                <Footer/>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
