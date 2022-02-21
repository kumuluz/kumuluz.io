import React from 'react';
import {Banner, SubscribeSection, Footer} from '../../components';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../../layouts";

export default function TeamPage() {
    const {t} = useI18next("other");
    return (
        <Layout>
            <div className="team-page">
                <Banner simplified={true} title={t('team.title')} content={t('team.content')}/>
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
