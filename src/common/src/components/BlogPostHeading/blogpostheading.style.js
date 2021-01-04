import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPostHeadingWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${themeGet('colors.inactiveIcon', '#000')};
  margin-bottom: 40px;
  padding-bottom: 15px;

  .blog-post-heading-category {
    display: inline-block;
    margin: 15px 30px 15px 0;
    font-size: 14px;
    text-transform: uppercase;
    color: ${themeGet('colors.headingColor', '#000')};
    transition: color 0.3s ease;

    &:hover {
      color: ${themeGet('colors.primary', '#000')};
      transition: color 0.3s ease;
    }
  }
`;
