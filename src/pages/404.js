import React from 'react';

import './index.scss';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";
import {Layout} from "../layouts";

export default function ErrorPage() {
    const {t} = useI18next();
    
    return (
        <Layout>
            <div className="index">
                <div className="banner">
                    <h1 className="col-lg-9 col-xl-8 px-5 mx-auto" dangerouslySetInnerHTML={{__html: t('404')}}/>
                </div>
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
