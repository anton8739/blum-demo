import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { getCookie, removeCookies, deleteCookie } from 'cookies-next';

export const getApolloClient = (ssr: boolean, req?: any, res?: any) => {
  const httpLink = createHttpLink({
    uri: process.env.APOLLO_CLIENT_URI,
  });

  const authLink = setContext((_, { headers }) => {
    let token;
    if (ssr) {
      token = getCookie('token', { req, res });
    } else {
      token = getCookie('token');
    }
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const recoveryLink = new RetryLink({
    delay: {
      initial: 0,
    },
    attempts: {
      max: 2,
      retryIf: error => {
        if (error.statusCode === 401) {
          if (ssr) {
            deleteCookie('token', { req, res });
          } else {
            removeCookies('token');
          }
        }
        return false;
      },
    },
  });
  return new ApolloClient({
    link: from([recoveryLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });
};
export const client = getApolloClient(false);
