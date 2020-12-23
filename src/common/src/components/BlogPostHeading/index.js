import React from 'react';
import { BlogPostHeadingWrapper } from './blogpostheading.style';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import Heading from '../Heading';
import Text from '../Text';

export default function BlogPostHeading({ blogPost }) {
  return (
    <BlogPostHeadingWrapper>
      {!!blogPost.category_group &&
        blogPost.category_group.map(({ category }, index) => (
          <Link
            href={`/blog-category/${category._meta.uid}`}
            key={`bphCategoryKey_${index}`}
          >
            <a className="blog-post-heading-category">
              {RichText.asText(category.name)}
            </a>
          </Link>
        ))}

      <Heading
        content={RichText.asText(blogPost.title)}
        fontSize={['26px', '34px', '42px', '55px']}
        fontWeight={'300'}
        color={'#0f2137'}
        letterSpacing={'-0.025em'}
      />

      <Text
        content={RichText.asText(blogPost.preview)}
        lineHeight={1.5}
        style={{ fontSize: 22 }}
      />
    </BlogPostHeadingWrapper>
  );
}
