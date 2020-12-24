import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogHighlightsWrapper = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;
  background-color: ${themeGet('colors.inactiveField', '#000')};
  font-size: 20px;
  line-height: 1.5;
  color: ${themeGet('colors.textColor', '#000')};

  .highlights-label {
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0 0 0 20px;
  }

  li {
    list-style-type: disc;
    margin-bottom: 15px;
  }
`;
