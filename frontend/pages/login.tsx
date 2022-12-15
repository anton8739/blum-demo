import Layout from '@/components/common/Layout/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Login from '@/components/modules/Login/Login';
import { getApolloClient } from '../src/core/apollo/client';
import { CHECK_AUTH } from '../src/core/apollo/query';
import { useState } from 'react';
import { AppContext } from '../src/core/context';
import { NextPage } from 'next';
import { UserI } from '@/types/index';
import { getCookie } from 'cookies-next';
import { appRoutes } from '../src/core/constants';
interface Props {
  auth: boolean;
  userData: UserI;
}

const LoginPage: NextPage<Props> = ({ auth, userData }) => {
  const [user, setUser] = useState(userData);
  const [isAuth, setIsAuth] = useState(auth);
  return (
    <AppContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      <Layout>
        <Login />
      </Layout>
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
  if (auth) {
    return {
      redirect: {
        permanent: false,
        destination: appRoutes.HOME,
      },
    };
  }
  return {
    props: {
      auth: auth,
      userData: userData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
export default LoginPage;
