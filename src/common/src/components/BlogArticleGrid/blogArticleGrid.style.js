import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Col = styled.div`
  flex: 0 0 33.333%;
  max-width: 33.333%;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .article-grid-box {
    display: block;
    margin-bottom: 50px;

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
`;
