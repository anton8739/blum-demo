import React, {FC} from 'react';
import {PostI} from "@/types/index";
import {Box, Image, Text} from "@chakra-ui/react";

interface Props {
    post: PostI
}
const Post:FC<Props> = ({post}) => {
    return (
        <Box width="300px" height="300px" display="flex" flexDirection="column" border="1px solid gray" borderRadius="4px" padding="15px">
            <Text>{post.attributes.title}</Text>
            <Image width="100%"  height="200px" src={`http://localhost:1337${post.attributes.image.data[0].attributes.url}`} alt="image"/>
            <Text>{post.attributes.subTitle}</Text>
        </Box>
    );
}

export default Post;