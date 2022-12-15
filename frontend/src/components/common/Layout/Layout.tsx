import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Content from '@/components/common/Layout/Content/Content';
import Header from '@/components/common/Layout/Header/Header';
import Footer from '@/components/common/Layout/Footer/Footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box width='100%' minHeight='100vh' display='flex' flexDirection='column'>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
};

export default Layout;
