import React from 'react';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { appRoutes } from '../../../../../core/constants';
import { useTranslation } from 'next-i18next';

const NavBar = () => {
  const { t } = useTranslation('common');
  return (
    <Box flex='1' display='flex' alignItems='center' gap='20px'>
      <Link href={appRoutes.POSTS}>{t('header.navbar.posts')}</Link>
    </Box>
  );
};

export default NavBar;
