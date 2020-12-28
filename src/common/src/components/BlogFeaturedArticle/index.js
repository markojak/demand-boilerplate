import { RichText } from 'prismic-reactjs';
import React from 'react';
import Heading from '../Heading';
import Image from '../Image';
import Link from 'next/link';
import { BlogFeaturedArticleWrapper } from './blogFeaturedArticle.style';

export default function BlogFeaturedArticle({ featuredArticle }) {
  return (
    <BlogFeaturedArticleWrapper>
      {featuredArticle && (
        <Link href={`/blog/${featuredArticle._meta.uid}`}>
          <a className="featured-article-box">
            <div className="featured-article-box__image-wrapper">
              {!!featuredArticle.image && (
                <Image
                  src={featuredArticle.image.preview.url}
                  alt={
                    featuredArticle.image.preview.alt ||
                    RichText.asText(featuredArticle.title)
                  }
                />
              )}
            </div>
            <div className="featured-article-box__text-wrapper">
              {!!featuredArticle.category && (
                <Link
                  href={`/blog-category/${featuredArticle.category._meta.uid}`}
                >
                  <a className="featured-article-box__text-wrapper__category">
                    {RichText.asText(featuredArticle.category.name)}
                  </a>
                </Link>
              )}
              <Heading
                as={'h3'}
                content={RichText.asText(featuredArticle.title)}
                fontSize={['16px', '16px', '18px', '26px']}
                fontWeight={'400'}
              />
            </div>
          </a>
        </Link>
      )}
    </BlogFeaturedArticleWrapper>
  );
}
