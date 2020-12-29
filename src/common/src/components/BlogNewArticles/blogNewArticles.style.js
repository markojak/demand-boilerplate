import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogNewArticlesWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 30px;

  .new-article-box {
    display: flex;
    margin: 0 0 20px 0;

    &__image-wrapper {
      min-width: 72px;
      max-width: 72px;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }

    &__text-wrapper {
      padding-left: 25px;
      h3 {
        color: ${themeGet('colors.labelColor', '#000')};
        max-height: 37px;
        overflow: hidden;
        margin-bottom: 0.5rem;
      }
      &__category {
        color: ${themeGet('colors.textColor', '#000')};
        text-transform: uppercase;
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .new-article-box {
      &__image-wrapper {
        min-width: 55px;
        max-width: 55px;
      }
      &__text-wrapper {
        padding-left: 15px;
      }
    }
  }

  @media only screen and (max-width: 990px) {
    .new-article-box {
      &__text-wrapper {
        h3 {
          max-height: 43px;
        }
      }
    }
  }
`;
