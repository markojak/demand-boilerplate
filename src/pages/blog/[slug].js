import {
  blogCategoriesQuery,
  blogPostQueryFields,
  blogRelatedArticlesQuery,
  fetchBlogUrlsQuery,
  fetchNavigationsQuery,
  fetchSocialIconsQuery
} from '../../utils/queries';
import { fetchAPI, prepareOpenGraphDataObject } from '../../utils/utils';
import { get } from 'lodash';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'src/common/src/theme/saas';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { Date, RichText } from 'prismic-reactjs';
import Head from 'next/head';
import { ResetCSS } from 'src/common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../containers/Saas/saas.style';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'src/common/src/contexts/DrawerContext';
import Navbar from '../../containers/Saas/Navbar';
import Footer from '../../containers/Saas/Footer';
import NewsletterSection from '../../containers/NewsletterSection';
import BlogPostHeading from 'src/common/src/components/BlogPostHeading';
import Container from 'src/common/src/components/UI/Container';
import Image from 'src/common/src/components/Image';
import BlogHeaderSection from 'src/common/src/components/BlogHeaderSection';
import BlogHighlightsSection from 'src/common/src/components/BlogHighlightsSection';
import BlogContentSection from 'src/common/src/components/BlogContentSection';
import BlogDateSection from 'src/common/src/components/BlogDateSection';
import BlogRelatedSection from '../../common/src/components/BlogRelatedSection';

export const getStaticPaths = async () => {
  const blogPostsResponse = await fetchAPI(`
    query {
      ${fetchBlogUrlsQuery}
    }
  `);
  const blogPosts = blogPostsResponse.allBlog_posts.edges;
  const paths = blogPosts.map((obj) => ({
    params: {
      slug: obj.node._meta.uid
    }
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query {
      ${fetchNavigationsQuery}
      ${fetchSocialIconsQuery}
      ${blogCategoriesQuery}
      
      blog_post(uid:"${params.slug}", lang:"en-us") {
        ${blogPostQueryFields}
      }
    }
  `;
  const data = await fetchAPI(query);

  const blogPost = get(data, 'blog_post', null);
  const blogPostCategoryId = get(data, 'blog_post.category._meta.id', null);

  let relatedArticles = null;
  if (blogPostCategoryId) {
    const query = `
    query {
      allBlog_posts (sortBy:date_DESC, where: {category: "${blogPostCategoryId}"}, first: 3) {
        edges {
          node {
            ${blogRelatedArticlesQuery}
          }
        }
      }
    }
  `;
    const relatedArticlesData = await fetchAPI(query);
    const threeArticlesWithSameCategory = get(
      relatedArticlesData,
      'allBlog_posts.edges',
      null
    );
    if (threeArticlesWithSameCategory) {
      // Remove the current article.
      relatedArticles = threeArticlesWithSameCategory.filter(
        (item) => item.node._meta.id !== blogPost._meta.id
      );
    }
  }

  return {
    props: {
      navigations: get(data, 'allNavigations.edges', null),
      socialIcons: get(data, 'allSocial_icons.edges', null),
      blogPost: blogPost,
      blogCategories: get(data, 'allBlog_categorys.edges', null),
      relatedArticles: relatedArticles
    },
    revalidate: process.env.revalidate
  };
};

export default function BlogPost({
  navigations,
  socialIcons,
  blogPost,
  blogCategories,
  relatedArticles
}) {
  const ogImageUrl = get(blogPost, 'og_image.url', null);
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        {/* Start head section */}
        <NextSeo
          title={RichText.asText(blogPost.seo_title)}
          description={RichText.asText(blogPost.seo_description)}
          openGraph={prepareOpenGraphDataObject(blogPost)}
        />
        <ArticleJsonLd
          url={typeof window !== 'undefined' && window.location.href}
          title={RichText.asText(blogPost.seo_title)}
          images={[ogImageUrl]}
          datePublished={Date(blogPost.date)}
          dateModified={Date(blogPost.lastPublicationDate)}
          authorName=""
          publisherName=""
          publisherLogo=""
          description={RichText.asText(blogPost.seo_description)}
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

          <Container width={'850px'}>
            <BlogPostHeading blogPost={blogPost} />
            {!!blogPost.image && (
              <Image
                src={blogPost.image.url}
                alt={blogPost.image.alt || RichText.asText(blogPost.title)}
              />
            )}
            <BlogHighlightsSection highlights={blogPost.article_highlights} />
            <BlogContentSection content={blogPost.content} />
            <BlogDateSection date={blogPost.date} />
            <NewsletterSection />
            <BlogRelatedSection relatedArticles={relatedArticles} />
          </Container>

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
