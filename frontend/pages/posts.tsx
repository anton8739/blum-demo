import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/common/Layout/Layout';
import Posts from '@/components/modules/Posts/Posts';
import { useEffect, useState } from 'react';
import { AppContext } from '../src/core/context';
import { useRouter } from 'next/router';
import { appRoutes } from '../src/core/constants';

import { NextPage } from 'next';
import { UserI } from '@/types/index';
import { CHECK_AUTH } from '../src/core/apollo/query';
import { getCookie } from 'cookies-next';
import { getApolloClient } from '../src/core/apollo/client';

interface Props {
  auth: boolean;
  userData: UserI;
}

const PostsPage: NextPage<Props> = ({ auth, userData }) => {
  const [user, setUser] = useState(userData);
  const [isAuth, setIsAuth] = useState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!isAuth) {
      router.push(appRoutes.LOGIN);
    }
  }, [isAuth]);
  return (
    <AppContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      <Layout>
        <Posts />
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
  if (!auth) {
    return {
      redirect: {
        permanent: false,
        destination: appRoutes.LOGIN,
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
export default PostsPage;
