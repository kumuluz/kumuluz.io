import React from 'react';
import {Banner, SubscribeSection, Footer} from '../../components';
import {FAQContent} from '../../components/sub-pages';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../../layouts";

export default function ContactPage() {
    const {t} = useI18next("other");
    
    return (
        <Layout>
            <div className="faq-page">
                <Banner simplified={true} title={t('faq.title')} content={t('faq.content')}/>
                <FAQContent/>
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
