import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';

import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'src/common/src/theme/saas';
import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import BannerSection from '../containers/Saas/BannerSection';
import FeatureSection from '../containers/Saas/FeatureSection';
import VisitorSection from '../containers/Saas/VisitorSection';
import ServiceSection from '../containers/Saas/ServiceSection';
import Footer from '../containers/Saas/Footer';
import PricingSection from '../containers/Saas/PricingSection';
import TrialSection from '../containers/Saas/TrialSection';
import TimelineSection from '../containers/Saas/TimelineSection';
import TestimonialSection from '../containers/Saas/TestimonialSection';
import PartnerSection from '../containers/Saas/PartnerSection';
import { DrawerProvider } from 'src/common/src/contexts/DrawerContext';
import FaqSection from '../containers/Saas/FaqSection';

import FormSection from '../containers/FormSection';
import NewsletterSection from '../containers/NewsletterSection';

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
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        {/* Start head section */}
        <NextSeo
          title={RichText.asText(page.seo_title)}
          description={RichText.asText(page.seo_description)}
          openGraph={prepareOpenGraphDataObject(page)}
        />
        <Head>
          <meta name="theme-color" content="#10ac84" />
          {/* Load google fonts */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of head section */}

        {/* Start wrapper section */}
        <ContentWrapper>
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
          <ServiceSection />
          <PricingSection />
          <TestimonialSection />
          <PartnerSection />
          <TimelineSection />
          <FaqSection />
          <TrialSection />
          <FormSection />
          <NewsletterSection />
          <Footer
            navigation={navigations.filter(
              (nav) => nav.node.location === 'Footer'
            )}
            socialIcons={socialIcons}
          />
        </ContentWrapper>
        {/* End of wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
}
