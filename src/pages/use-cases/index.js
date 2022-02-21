import React from 'react';
import {Banner, SubscribeSection, Footer, UseCasesSection, PartnersSection, UseCasesBlocks} from '../../components';
import {AwardsSection, UseCasesStatsSection} from '../../components/sub-pages';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../../layouts";

export default function UseCasesPage() {
    const {t} = useI18next("other");
    return (
        <Layout>
            
            
            <div className="use-cases-page">
                <Banner simplified={true} title={t('useCases.title')} content={t('useCases.content')}/>
                
                <UseCasesBlocks title={t('useCases.blocks.title')} content={t('useCases.blocks.content')}/>
                
                <UseCasesStatsSection/>
                
                <UseCasesSection/>
                <PartnersSection all={true}/>
                
                <br/><br/>
                <hr className="mt-5" style={{width: '400px'}}/>
                
                <AwardsSection/>
                
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
