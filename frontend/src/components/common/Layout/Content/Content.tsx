import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
interface Props {
  children: ReactNode;
}
const Content: FC<Props> = ({ children }) => {
  return <Box padding='15px 15px 15px 15px' background='brandColorMain' flex='1'display='flex' flexDirection='column'>{children}</Box>;
};

export default Content;
