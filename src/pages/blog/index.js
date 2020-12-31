import {
  blogCategoriesQuery,
  blogFeaturedArticleQuery,
  blogNewArticlesQuery,
  fetchBlogPageQuery,
  fetchNavigationsQuery,
  fetchSocialIconsQuery
} from '../../utils/queries';
import { fetchAPI, prepareOpenGraphDataObject } from '../../utils/utils';
import { get } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from '../../common/src/theme/agency';
import React, { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import { RichText } from 'prismic-reactjs';
import Head from 'next/dist/next-server/lib/head';
import { ResetCSS } from '../../common/src/assets/css/style';
import {
  AgencyWrapper,
  GlobalStyle
} from '../../containers/Agency/agency.blog.style';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';
import Navbar from '../../containers/Agency/Navbar';
import BlogHeaderSection from '../../common/src/components/BlogHeaderSection';
import Footer from '../../containers/Agency/Footer';
import Container from '../../common/src/components/UI/Container';
import { Col, Row } from '../../containers/AppMinimal/Blog/blog.style';
import Heading from '../../common/src/components/Heading';
import BlogNewArticles from '../../common/src/components/BlogNewArticles';
import BlogFeaturedArticle from '../../common/src/components/BlogFeaturedArticle';
import BlogPopularArticles from '../../common/src/components/BlogPopularArticles';

export const getStaticProps = async ({ params }) => {
  const query = `
    query {
      ${fetchNavigationsQuery}
      ${fetchSocialIconsQuery}
      ${blogCategoriesQuery}
      ${fetchBlogPageQuery}
      
      allBlog_posts (where: {is_featured: false}, sortBy:date_DESC, first: 5) {
        edges {
          node {
            ${blogNewArticlesQuery}
          }
        }
      }
    }
  `;
  const data = await fetchAPI(query);

  const props = {
    navigations: get(data, 'allNavigations.edges', null),
    socialIcons: get(data, 'allSocial_icons.edges', null),
    blogCategories: get(data, 'allBlog_categorys.edges', null),
    page: get(data, 'allPages.edges[0].node', null),
    newArticles: get(data, 'allBlog_posts.edges', null)
  };

  const featuredArticleData = await fetchAPI(blogFeaturedArticleQuery);
  const featuredArticle = get(
    featuredArticleData,
    'allBlog_posts.edges[0].node',
    null
  );
  if (featuredArticle) {
    props.featuredArticle = featuredArticle;
  }

  return {
    props: props,
    revalidate: process.env.revalidate
  };
};

export default function BlogPage({
  navigations,
  socialIcons,
  blogCategories,
  page,
  featuredArticle,
  newArticles
}) {
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
          <BlogHeaderSection blogCategories={blogCategories} />

          <Container>
            <Row>
              <Col>
                {featuredArticle && (
                  <BlogFeaturedArticle featuredArticle={featuredArticle} />
                )}
              </Col>
              <Col
                style={{
                  borderRight: `2px solid #f1f4f6`
                }}
              >
                <Heading
                  as={'h2'}
                  content={'New articles'}
                  fontSize={['16px', '18px', '20px', '24px']}
                  fontWeight={300}
                />
                <BlogNewArticles newArticles={newArticles} />
              </Col>
              <Col>
                <Heading
                  as={'h2'}
                  content={'Popular articles'}
                  fontSize={['16px', '18px', '20px', '24px']}
                  fontWeight={300}
                />
                <BlogPopularArticles popularArticles={newArticles} />
              </Col>
            </Row>
          </Container>

          <Footer
            navigation={navigations.filter(
              (nav) => nav.node.location === 'Footer'
            )}
          />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
}
