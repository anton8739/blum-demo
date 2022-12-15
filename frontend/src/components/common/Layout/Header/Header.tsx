import React from 'react';
import { Box } from '@chakra-ui/react';

import NavBar from '@/components/common/Layout/Header/NavBar/NavBar';
import SwitchLocale from '@/components/common/Layout/Header/SwitchLocale/SwitchLocale';
import UserMenu from '@/components/common/Layout/Header/UserMenu/UserMenu';
import Link from 'next/link';
import { appRoutes } from '../../../../core/constants';

const Header = () => {
  return (
    <Box
      height='50px'
      background='brandColor1'
      display='flex'
      alignItems='center'
      padding='5px 15px 5px 15px'
      gap='20px'
    >
      <Link href={appRoutes.HOME}>BLUM</Link>
      <NavBar />
      <UserMenu />
      <SwitchLocale />
    </Box>
  );
};

export default Header;
