import { RichText } from 'prismic-reactjs';
import React from 'react';
import Heading from '../Heading';
import Image from '../Image';
import Link from 'next/link';
import { BlogNewArticlesWrapper } from './blogNewArticles.style';

export default function BlogNewArticles({ newArticles }) {
  return (
    <BlogNewArticlesWrapper>
      {newArticles &&
        newArticles.map(({ node }, index) => (
          <Link
            key={`newArticleBoxKey_${index}`}
            href={`/blog/${node._meta.uid}`}
          >
            <a className="new-article-box">
              <div className="new-article-box__image-wrapper">
                {!!node.image && (
                  <Image
                    src={node.image.preview.url}
                    alt={node.image.preview.alt || RichText.asText(node.title)}
                  />
                )}
              </div>
              <div className="new-article-box__text-wrapper">
                <Heading
                  as={'h3'}
                  content={RichText.asText(node.title)}
                  fontSize={['12px', '12px', '12px', '15px']}
                  fontWeight={'400'}
                />
                {!!node.category && (
                  <Link href={`/blog-category/${node.category._meta.uid}`}>
                    <a className="new-article-box__text-wrapper__category">
                      {RichText.asText(node.category.name)}
                    </a>
                  </Link>
                )}
              </div>
            </a>
          </Link>
        ))}
    </BlogNewArticlesWrapper>
  );
}
