import { Date, RichText } from 'prismic-reactjs';
import React from 'react';
import Heading from '../Heading';
import Link from 'next/link';
import { BlogPopularArticlesWrapper } from './blogPopularArticles.style';

function formatDate(date) {
  const prismicDate = Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(prismicDate);

  return formattedDate;
}

export default function BlogPopularArticles({ popularArticles }) {
  return (
    <BlogPopularArticlesWrapper>
      {popularArticles &&
        popularArticles.map(({ article }, index) => (
          <Link
            key={`popularArticleBoxKey_${index}`}
            href={`/blog/${article._meta.uid}`}
          >
            <a className="popular-article-box">
              <div className="popular-article-box__number-wrapper">
                0{index + 1}
              </div>
              <div className="popular-article-box__text-wrapper">
                <Heading
                  as={'h3'}
                  content={RichText.asText(article.title)}
                  fontSize={['14px', '14px', '14px', '18px']}
                  fontWeight={'300'}
                />
                <div className="popular-article-box__text-wrapper__date">
                  {formatDate(article.date)}
                </div>
              </div>
            </a>
          </Link>
        ))}
    </BlogPopularArticlesWrapper>
  );
}
