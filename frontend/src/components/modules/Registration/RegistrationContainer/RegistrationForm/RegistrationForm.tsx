import React from 'react';
import { useTranslation } from 'next-i18next';
import { RegistrationFormContext } from '../../../../../core/context';
import { REGISTRATION_FIELDS } from '../../../../../core/constants/fields';
import InputField from '@/components/common/Fields/InputField/InputField';

const RegistrationForm = () => {
  const { t } = useTranslation('common');
  return (
    <form>
      <InputField
        name={REGISTRATION_FIELDS.USERNAME}
        label={t('registration.username.label')}
        placeholder={t('registration.username.placeholder')}
        type='text'
        context={RegistrationFormContext}
      />
      <InputField
        name={REGISTRATION_FIELDS.EMAIL}
        label={t('registration.email.label')}
        placeholder={t('registration.email.placeholder')}
        type='email'
        context={RegistrationFormContext}
      />
      <InputField
        name={REGISTRATION_FIELDS.PASSWORD}
        label={t('registration.password.label')}
        placeholder={t('registration.password.placeholder')}
        type='password'
        context={RegistrationFormContext}
      />
    </form>
  );
};

export default RegistrationForm;
