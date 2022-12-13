import {Box, Button, Spinner, Switch} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useQuery } from '@apollo/client';

import PostList from '@/modules/Home/PostList/PostList';
import {GET_POSTS} from "../src/core/apollo/query";
import {GetPostsResponse} from "../src/core/apollo/types";
import {useRouter} from "next/router";
import {ChangeEvent} from "react";
import Link from "next/link";

const Home = () => {
  const { t, i18n } = useTranslation('common');
  const {locale} = useRouter();
  const { loading, data } = useQuery<GetPostsResponse>(GET_POSTS, {
    variables: {
      locale : locale
    }
  });

  return (
    <Box display='flex' flexDirection='column' minHeight='100vh' gap="20px">
      <Box display="flex" alignItems='center' padding="15px" gap="30px">
        <Box>
          {t('title')}
        </Box>
        <Link  href='/' locale={"en"}>
          EN
        </Link>
        <Link  href='/' locale={"zh"}>
          ZH
        </Link>
      </Box>

      {loading ? <Spinner /> : <PostList posts={data.posts.data}/>}
    </Box>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default Home;
