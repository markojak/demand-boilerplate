import { RichText } from 'prismic-reactjs';
import React from 'react';
import { BlogContentWrapper } from './blogContentSection.style';

export default function BlogContentSection({ content }) {
  return <BlogContentWrapper>{RichText.render(content)}</BlogContentWrapper>;
}
