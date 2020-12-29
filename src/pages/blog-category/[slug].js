import React, { Fragment } from 'react';
import { get } from 'lodash';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

import { ThemeProvider } from 'styled-components';
import { agencyTheme } from '../../common/src/theme/agency';
import { fetchAPI, prepareOpenGraphDataObject } from '../../utils/utils';
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
import {
  blogCategoriesQuery,
  blogCategoryArticlesQuery,
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
    const articleWherePart =
      params.slug === 'all'
        ? ''
        : `where: {category: "${currentCategoryId}"}, `;
    const query = `
      query {
        ${fetchNavigationsQuery}
        ${fetchSocialIconsQuery}
        ${blogCategoriesQuery}
        ${fetchBlogCategoryPageQuery}
        
        allBlog_posts (${articleWherePart}sortBy:date_DESC, last: 6) {
          edges {
            node {
              ${blogCategoryArticlesQuery}
            }
          }
        }
      }
    `;
    const data = await fetchAPI(query);

    props = {
      navigations: get(data, 'allNavigations.edges', null),
      socialIcons: get(data, 'allSocial_icons.edges', null),
      blogCategories: get(data, 'allBlog_categorys.edges', null),
      page: get(data, 'allPages.edges[0].node', null),
      articles: get(data, 'allBlog_posts.edges', null)
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
  articles
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

          <BlogArticleGrid articles={articles} />

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
