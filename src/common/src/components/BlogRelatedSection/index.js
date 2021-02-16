import { RichText } from 'prismic-reactjs';
import React from 'react';
import { BlogRelatedWrapper } from './blogRelatedSection.style';
import Heading from '../Heading';
import Text from '../Text';
import Image from '../Image';
import Link from 'next/link';
import { prismicBodyToMarkdown } from '../../../../utils/utils';

export default function BlogRelatedSection({ relatedArticles }) {
  return (
    <BlogRelatedWrapper>
      <Heading
        as={'h3'}
        mb={40}
        content={'Related articles'}
        fontSize={['22px', '24px', '28px', '34px']}
        fontWeight={'400'}
        color={'#0f2137'}
      />

      {relatedArticles &&
        relatedArticles.map(({ node }, index) => (
          <Link
            key={`relatedArticleBoxKey_${index}`}
            href={`/blog/${node._meta.uid}`}
          >
            <a className="related-article-box">
              <div className="related-article-box__text-wrapper">
                <Heading
                  as={'h4'}
                  content={RichText.asText(node.title)}
                  fontSize={['18px', '20px', '22px', '24px']}
                  fontWeight={'400'}
                />
                <Text
                  content={prismicBodyToMarkdown(node.preview)}
                  lineHeight={1.2}
                  style={{ fontSize: 16 }}
                />
              </div>
              <div className="related-article-box__image-wrapper">
                {!!node.image && (
                  <Image
                    src={node.image.preview.url}
                    alt={node.image.preview.alt || RichText.asText(node.title)}
                  />
                )}
              </div>
            </a>
          </Link>
        ))}
    </BlogRelatedWrapper>
  );
}
