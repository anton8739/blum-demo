import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const SwitchLocale = () => {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  return (
    <Menu>
      <MenuButton>{t('lang')}</MenuButton>
      <MenuList>
        <MenuItem as={Link} href={pathname} locale={'en'}>
          EN
        </MenuItem>
        <MenuItem as={Link} href={pathname} locale={'zh'}>
          ZH
        </MenuItem>
        <MenuItem as={Link} href={pathname} locale={'ar'}>
          AR
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SwitchLocale;
