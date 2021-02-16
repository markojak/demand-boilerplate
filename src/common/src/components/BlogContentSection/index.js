import React from 'react';
import { BlogContentWrapper } from './blogContentSection.style';
import { prismicBodyToMarkdown } from '../../../../utils/utils';

export default function BlogContentSection({ content }) {
  return (
    <BlogContentWrapper>{prismicBodyToMarkdown(content)}</BlogContentWrapper>
  );
}
