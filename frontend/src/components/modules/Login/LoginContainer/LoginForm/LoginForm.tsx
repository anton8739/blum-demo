import React from 'react';
import { useTranslation } from 'next-i18next';
import { LoginFormContext } from '../../../../../core/context';
import { LOGIN_FIELDS } from '../../../../../core/constants/fields';
import InputField from '@/components/common/Fields/InputField/InputField';

const LoginForm = () => {
  const { t } = useTranslation('common');
  return (
    <form>
      <InputField
        name={LOGIN_FIELDS.EMAIL}
        label={t('login.email.label')}
        placeholder={t('login.email.placeholder')}
        type='email'
        context={LoginFormContext}
      />
      <InputField
        name={LOGIN_FIELDS.PASSWORD}
        label={t('login.password.label')}
        placeholder={t('login.password.placeholder')}
        type='password'
        context={LoginFormContext}
      />
    </form>
  );
};

export default LoginForm;
