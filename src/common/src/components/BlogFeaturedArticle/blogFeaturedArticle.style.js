import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogFeaturedArticleWrapper = styled.div`
  margin-bottom: 30px;

  .featured-article-box {
    display: block;

    &__image-wrapper {
      img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        object-position: top;
      }
    }

    &__text-wrapper {
      margin-top: 20px;

      &__category {
        color: ${themeGet('colors.textColor', '#000')};
        text-transform: uppercase;
        font-size: 12px;
      }

      h3 {
        margin-top: 15px;
        color: ${themeGet('colors.headingColor', '#000')};
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .featured-article-box {
      &__image-wrapper {
        img {
          height: 120px;
        }
      }
    }
  }
`;
