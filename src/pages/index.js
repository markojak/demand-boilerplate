import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from '../common/src/theme/agency';
import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import FeatureSection from '../containers/Agency/FeatureSection';
import AboutUsSection from '../containers/Agency/AboutUsSection';
import WorkHistory from '../containers/Agency/WorkHistory';
import BlogSection from '../containers/Agency/BlogSection';
import TestimonialSection from '../containers/Agency/TestimonialSection';
import TeamSection from '../containers/Agency/TeamSection';
import VideoSection from '../containers/Agency/VideoSection';
import QualitySection from '../containers/Agency/QualitySection';
import Footer from '../containers/Agency/Footer';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import FaqSection from '../containers/Agency/FaqSection';
import FormSection from '../containers/Agency/FormSection';
import { fetchAPI, prepareOpenGraphDataObject } from '../utils/utils';
import {
  fetchIndexPageQuery,
  fetchNavigationsQuery,
  fetchSocialIconsQuery
} from '../utils/queries';

export async function getStaticProps(context) {
  const query = `
    query {
      ${fetchNavigationsQuery}
      ${fetchSocialIconsQuery}
      ${fetchIndexPageQuery}
    }
  `;
  const data = await fetchAPI(query);

  return {
    props: {
      navigations: get(data, 'allNavigations.edges', null),
      socialIcons: get(data, 'allSocial_icons.edges', null),
      page: get(data, 'allPages.edges[0].node', null)
    },
    revalidate: process.env.revalidate
  };
}

export default function HomePage({ navigations, socialIcons, page }) {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <NextSeo
          title={RichText.asText(page.seo_title)}
          description={RichText.asText(page.seo_description)}
          openGraph={prepareOpenGraphDataObject(page)}
        />
        <Head>
          <meta name="theme-color" content="#10ac84" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}

        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar
                socialIcons={socialIcons}
                navigation={navigations.filter(
                  (nav) => nav.node.location === 'Main'
                )}
              />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          <BlogSection />
          <QualitySection />
          <VideoSection />
          <TestimonialSection />
          <TeamSection />
          <FaqSection />
          <FormSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
}
