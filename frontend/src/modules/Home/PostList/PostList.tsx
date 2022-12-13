import React, {FC} from 'react';
import {PostI} from "@/types/index";
import Post from "@/modules/Home/PostList/Post/Post";
import {Box} from "@chakra-ui/react";
interface Props {
    posts : PostI[]
}
const PostList:FC<Props> = ({posts}) => {
    return (
        <Box maxWidth="1000px" display="flex" flexWrap="wrap" gap="20px">
            {posts.map(post => <Post post={post}/>)}
        </Box>
    );
}

export default PostList;