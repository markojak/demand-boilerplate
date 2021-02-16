import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SocialIconSectionStyle = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 15px;

  li {
    margin: 0 12px;
    list-style-type: none;

    a {
      display: flex;
      color: ${themeGet('colors.textColor', '#000')};
      &:hover {
        opacity: 0.7;
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }

    &:first-child {
      margin-left: 0;
    }
  }
`;

export default SocialIconSectionStyle;
