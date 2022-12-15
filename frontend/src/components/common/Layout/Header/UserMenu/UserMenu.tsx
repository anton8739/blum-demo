import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { appRoutes } from '../../../../../core/constants';
import { AppContext } from '../../../../../core/context';
import { removeCookies } from 'cookies-next';
const UserMenu = () => {
  const { isAuth, setUser, setIsAuth, user } = useContext(AppContext);
  const { t } = useTranslation('common');
  const logout = async () => {
    removeCookies('token');
    setUser(null);
    setIsAuth(false);
  };
  return (
    <Box display='flex' alignItems='center' gap='20px'>
      {isAuth ? (
        <>
          <Box>{user.username}</Box>
          <Button variant='blumBlack' onClick={logout}>
            {t('header.userMenu.logOut')}
          </Button>
        </>
      ) : (
        <>
          <Button variant='blum' as={Link} href={appRoutes.REGISTRATION}>
            {t('header.userMenu.signUp')}
          </Button>
          <Button variant='blumBlack' as={Link} href={appRoutes.LOGIN}>
            {t('header.userMenu.signIn')}
          </Button>
        </>
      )}
    </Box>
  );
};

export default UserMenu;
