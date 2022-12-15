import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        username
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;
export const REGISTRATION = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        email
        username
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;