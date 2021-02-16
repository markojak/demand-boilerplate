import React from 'react';
import { BlogHighlightsWrapper } from './blogHighlightsSection.style';
import Text from 'src/common/src/components/Text';
import { prismicBodyToMarkdown } from '../../../../utils/utils';

export default function BlogHighlightsSection({ highlights }) {
  return (
    <BlogHighlightsWrapper>
      <Text content="ARTICLE HIGHLIGHTS" className="highlights-label" />
      {prismicBodyToMarkdown(highlights)}
    </BlogHighlightsWrapper>
  );
}
