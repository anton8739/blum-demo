import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/core/apollo/client';

const App = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
