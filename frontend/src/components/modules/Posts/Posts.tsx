import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GetPostsResponse } from '../../../core/apollo/types';
import { GET_POSTS } from '../../../core/apollo/query';
import PostList from '@/components/modules/Posts/PostList/PostList';

const Posts = () => {
  const { locale } = useRouter();
  const { loading, data } = useQuery<GetPostsResponse>(GET_POSTS, {
    variables: {
      locale: locale,
    },
  });
  return (
    <Box flex='1' display='flex' flexDirection='column'>
      {loading ? (
        <Box display='flex' alignItems='center' justifyContent='center' flex='1'>
          <Spinner />
        </Box>
      ) : (
        <PostList posts={data?.posts?.data} />
      )}
    </Box>
  );
};

export default Posts;
