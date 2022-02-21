import React, {useState} from 'react';
import {Banner, SubscribeSection, Footer} from '../../components';
import {MediaKit} from '../../components/sub-pages';
import {Container, Row, Col, Button} from 'reactstrap';
import moment from 'moment';

import {articles as articlesConfig} from '../../content/articles';

import './index.scss';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../../layouts";

export default function PressPage() {
    const {t} = useI18next(["other", "translations"]);
    
    const [articles, setArticles] = useState(() => {
        return articlesConfig
            .map(a => {
                a.date = moment(a.date);
                return a;
            })
            .sort((a, b) => {
                return moment(b.date).format('X') - moment(a.date).format('X');
            })
            .slice(0, 6);
    });
    
    function loadMore() {
        const ars = articlesConfig
            .map(a => {
                a.date = moment(a.date);
                return a;
            })
            .sort((a, b) => {
                return moment(b.date).format('X') - moment(a.date).format('X');
            });
        
        setArticles(ars);
    }
    
    return (
        <Layout>
            <div className="press-page">
                <Banner simplified={true} title={t('press.title')} content={t('press.content')}/>
                
                <div className="dark-section py-5">
                    <Container className="py-5">
                        <Row>
                            {articles.map((a, k) => (
                                <Col key={k} xs="12" md="6" className="mb-5 animated fadeInUp">
                                    <h6>{moment(a.date).format('MMMM YYYY')}</h6>
                                    <h4>{a.title}</h4>
                                    <p dangerouslySetInnerHTML={{__html: a.content}}/>
                                </Col>
                            ))}
                        </Row>
                        {articles.length <= 6 && (
                            <Row>
                                <Col className="text-center">
                                    <Button outline color="secondary" onClick={loadMore}>
                                        {t('translations:actions.loadMore')}
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </div>
                
                <MediaKit/>
                
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
