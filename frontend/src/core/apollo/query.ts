import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query posts($locale: I18NLocaleCode) {
    posts(locale: $locale) {
      data {
        id
        attributes {
          title
          subTitle
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
