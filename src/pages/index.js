import React, { Fragment } from 'react';
import Head from 'next/head';
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
import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <NextSeo
          title="Agency | A react next landing page"
          description="React next landing page"
          openGraph={{
            url: 'https://www.url.ie/a',
            title: 'Open Graph Title',
            description: 'Open Graph Description',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800, // optional
                height: 600, // optional
                alt: 'Og Image Alt' // optional
              }
              //{ url: 'https://www.example.ie/og-image-03.jpg' },
            ],
            site_name: 'SiteName'
          }}
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
              <Navbar />
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
