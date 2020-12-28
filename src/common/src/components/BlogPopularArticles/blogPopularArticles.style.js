import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogPopularArticlesWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 30px;

  .popular-article-box {
    display: flex;
    margin: 0 0 20px 0;

    &__number-wrapper {
      min-width: 40px;
      max-width: 40px;
      text-align: center;
      color: ${themeGet('colors.labelColor', '#000')};
      font-size: 30px;
      opacity: 0.4;
      line-height: 1;
    }

    &__text-wrapper {
      padding-left: 25px;
      h3 {
        color: ${themeGet('colors.black', '#000')};
        max-height: 43px;
        overflow: hidden;
        margin-bottom: 0.5rem;
      }
      &__date {
        color: ${themeGet('colors.textColor', '#000')};
        font-size: 12px;
      }

      @media only screen and (max-width: 992px) {
        padding-left: 10px;
        h3 {
          max-height: 49px;
        }
      }
    }
  }
`;
