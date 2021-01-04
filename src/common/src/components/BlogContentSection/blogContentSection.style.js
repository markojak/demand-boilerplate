import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogContentWrapper = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${themeGet('colors.inactiveIcon', '#000')};
  font-size: 20px;
  line-height: 1.5;
  color: ${themeGet('colors.textColor', '#000')};

  ul {
    margin: 0;
    padding: 0 0 0 20px;
  }

  li {
    list-style-type: disc;
    margin-bottom: 15px;
  }
`;
