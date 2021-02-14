import React, { Fragment, useState, useEffect } from 'react';
import { get } from 'lodash';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'src/common/src/theme/saas';
import {
  fetchAPI,
  fetchArticlesPaginated,
  prepareOpenGraphDataObject
} from '../../utils/utils';
import { ResetCSS } from '../../common/src/assets/css/style';
import { ContentWrapper, GlobalStyle } from '../../containers/Saas/saas.style';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';
import Navbar from '../../containers/Saas/Navbar';
import BlogHeaderSection from '../../common/src/components/BlogHeaderSection';
import Footer from '../../containers/Saas/Footer';
import {
  blogCategoriesQuery,
  fetchBlogCategoryPageQuery,
  fetchNavigationsQuery,
  fetchSocialIconsQuery
} from '../../utils/queries';
import BlogArticleGrid from '../../common/src/components/BlogArticleGrid';

export const getStaticPaths = async () => {
  const blogCategoriesResponse = await fetchAPI(`
    query {
      ${blogCategoriesQuery}
    }
  `);
  const blogCategories = blogCategoriesResponse.allBlog_categorys.edges;
  const categoryPaths = blogCategories.map((obj) => ({
    params: {
      slug: obj.node._meta.uid
    }
  }));

  const paths = [
    {
      params: {
        slug: 'all'
      }
    },
    ...categoryPaths
  ];

  return {
    paths: paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  let currentCategoryId = null;
  if (params.slug !== 'all') {
    const query = `
    query {
      blog_category (uid: "${params.slug}", lang: "en-us") {
        name
        _meta {
          id
          uid
        }
      }
    }
  `;
    const categoryData = await fetchAPI(query);
    currentCategoryId = get(categoryData, 'blog_category._meta.id', null);
  }

  let props = null;

  if (!!currentCategoryId || params.slug === 'all') {
    const query = `
      query {
        ${fetchNavigationsQuery}
        ${fetchSocialIconsQuery}
        ${blogCategoriesQuery}
        ${fetchBlogCategoryPageQuery}
      }
    `;
    const data = await fetchAPI(query);

    const articles = await fetchArticlesPaginated(
      params.slug,
      currentCategoryId
    );

    props = {
      navigations: get(data, 'allNavigations.edges', null),
      socialIcons: get(data, 'allSocial_icons.edges', null),
      blogCategories: get(data, 'allBlog_categorys.edges', null),
      page: get(data, 'allPages.edges[0].node', null),
      initialArticles: articles,
      currentCategoryId
    };
  }

  return {
    props: props,
    revalidate: process.env.revalidate
  };
};

export default function BlogCategoryPage({
  navigations,
  socialIcons,
  blogCategories,
  page,
  initialArticles,
  currentCategoryId
}) {
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
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
          <BlogHeaderSection blogCategories={blogCategories} />

          {initialArticles && (
            <BlogArticleGrid
              initialArticles={initialArticles}
              currentCategoryId={currentCategoryId}
            />
          )}

          <Footer
            navigation={navigations.filter(
              (nav) => nav.node.location === 'Footer'
            )}
          />
        </ContentWrapper>
        {/* End of wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
}
