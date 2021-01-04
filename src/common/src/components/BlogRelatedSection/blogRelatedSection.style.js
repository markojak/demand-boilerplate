import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BlogRelatedWrapper = styled.div`
  display: block;
  padding-top: 40px;
  padding-bottom: 30px;
  border-top: 1px solid ${themeGet('colors.inactiveIcon', '#000')};
  font-size: 16px;

  .related-article-box {
    color: ${themeGet('colors.textColor', '#000')};
    display: flex;
    margin: 20px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid ${themeGet('colors.inactiveIcon', '#000')};

    &__text-wrapper {
      padding-right: 30px;

      h4 {
        color: ${themeGet('colors.headingColor', '#000')};
      }
    }

    &__image-wrapper {
      min-width: 174px;

      img {
        width: 200px;
        border-radius: 5px;
      }
    }

    &:last-of-type {
      border: none;
    }
  }

  @media only screen and (max-width: 575px) {
    .related-article-box {
      flex-direction: column-reverse;

      &__text-wrapper {
        padding-right: 0px;
        margin-top: 20px;
      }

      &__image-wrapper {
        min-width: 100%;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          object-position: top;
        }
      }
    }
  }
`;
