import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/common/Layout/Layout';
import { getApolloClient } from '../src/core/apollo/client';
import { CHECK_AUTH } from '../src/core/apollo/query';
import { useState } from 'react';
import { AppContext } from '../src/core/context';
import { NextPage } from 'next';
import { UserI } from '@/types/index';
import { getCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
interface Props {
  auth: boolean;
  userData: UserI;
}

const HomePage: NextPage<Props> = ({ auth, userData }) => {
  const [user, setUser] = useState(userData);
  const [isAuth, setIsAuth] = useState(auth);
  const { t } = useTranslation('common');
  return (
    <AppContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      <Layout>{t('home.title')}</Layout>
    </AppContext.Provider>
  );
};
export const getServerSideProps = async ({ locale, req, res }) => {
  const token = getCookie('token', { req, res });
  let auth = false;
  let userData = null;
  if (token) {
    try {
      const client = getApolloClient(true, req, res);
      const response = await client.query({
        query: CHECK_AUTH,
      });
      if (response) {
        userData = response.data.me;
        auth = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return {
    props: {
      auth: auth,
      userData: userData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
export default HomePage;
