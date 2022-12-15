import React, { FC } from 'react';
import { PostI } from '@/types/index';
import { Box } from '@chakra-ui/react';
import Post from './Post/Post';
interface Props {
  posts: PostI[];
}
const PostList: FC<Props> = ({ posts }) => {
  return (
    <Box maxWidth='1000px' display='flex' flexWrap='wrap' gap='20px' margin='0 auto 0 auto'>
      {posts?.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
