import React from 'react';
import { BlogHighlightsWrapper } from './blogHighlightsSection.style';
import Text from 'src/common/src/components/Text';
import { RichText } from 'prismic-reactjs';

export default function BlogHighlightsSection({ highlights }) {
  return (
    <BlogHighlightsWrapper>
      <Text content="ARTICLE HIGHLIGHTS" className="highlights-label" />
      {RichText.render(highlights)}
    </BlogHighlightsWrapper>
  );
}
