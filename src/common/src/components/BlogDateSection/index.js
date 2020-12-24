import { Date } from 'prismic-reactjs';
import React from 'react';
import { BlogDateWrapper } from './blogDateSection.style';

export default function BlogDateSection({ date }) {
  const prismicDate = Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(prismicDate);

  return <BlogDateWrapper>{formattedDate}</BlogDateWrapper>;
}
