import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BannerBG from 'src/common/src/assets/image/agency/agency-banner.png';

const BannerWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  .row {
    position: relative;
    z-index: 1;
  }
`;

const CategoryMenuWrapper = styled.div`
  display: block;
  width: 100%;
  border-top: 1px solid ${themeGet('colors.lightBorder', '#dedede')};
  text-align: right;
`;

const CategoryMenuItem = styled.div`
  display: inline-block;
  margin-bottom: 30px;

  a {
    display: inline-block;
    padding: 15px;
    font-size: 12px;
    text-transform: uppercase;
    color: ${themeGet('colors.headingColor', '#000')};
    transition: color 0.3s ease;

    &:hover {
      color: ${themeGet('colors.primary', '#000')};
      transition: color 0.3s ease;
    }
  }
`;

export { CategoryMenuWrapper, CategoryMenuItem };

export default BannerWrapper;
