import React from 'react';
import {Banner, SubscribeSection, QuoteSection, Footer, UseCasesSection, PartnersSection} from '../components';
import {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
    SectionEight,
    TestemonialsSection,
    SectionTen,
    ContactForm,
    VisionSection,
    LogosSection
} from '../components/index-page';

import './index.scss';
import {UseCasesStatsSection} from '../components/sub-pages';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../layouts";

export default function IndexPage() {
    const {t} = useI18next();
    
    return (
        <Layout>
            <div className="index">
                <Banner/>
                <SectionTen/>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
                <SectionEight/>
                <SectionSeven/>
                <SubscribeSection/>
                <SectionSix/>
                <QuoteSection quote={t('quoteSection.quote')} author={t('quoteSection.author')}
                    company={t('quoteSection.company')}/>
                <LogosSection/>
                <UseCasesStatsSection compact={true}/>
                <UseCasesSection/>
                <TestemonialsSection/>
                <PartnersSection/>
                <VisionSection/>
                <SubscribeSection hideSocial={true}/>
                <ContactForm/>
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
