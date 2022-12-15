import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/core/apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: any) => {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
