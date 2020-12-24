import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogDateWrapper = styled.div`
  display: block;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${themeGet('colors.lightBorder', '#000')};
  font-size: 16px;
  text-transform: uppercase;
  color: ${themeGet('colors.textColor', '#000')};
`;
