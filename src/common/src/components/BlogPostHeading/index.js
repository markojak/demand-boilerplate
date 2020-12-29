import React from 'react';
import { BlogPostHeadingWrapper } from './blogpostheading.style';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import Heading from 'src/common/src/components/Heading';
import Text from 'src/common/src/components/Text';

export default function BlogPostHeading({ blogPost }) {
  return (
    <BlogPostHeadingWrapper>
      {!!blogPost.category && (
        <Link href={`/blog-category/${blogPost.category._meta.uid}`}>
          <a className="blog-post-heading-category">
            {RichText.asText(blogPost.category.name)}
          </a>
        </Link>
      )}

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
