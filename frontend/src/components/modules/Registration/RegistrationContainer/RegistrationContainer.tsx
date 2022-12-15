import React, { useContext, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import RegistrationForm from '@/components/modules/Registration/RegistrationContainer/RegistrationForm/RegistrationForm';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../../../../core/utils/validationShema';
import {  RegistrationFormContext } from '../../../../core/context';
import { useMutation } from '@apollo/client';
import { RegistrationResponse } from '../../../../core/apollo/types';
import {  REGISTRATION } from '../../../../core/apollo/mutation';
import { useToast } from '../../../../core/hooks/toast';
import { appRoutes } from '../../../../core/constants';
import Link from 'next/link';

const RegistrationContainer = () => {
  const { t } = useTranslation('common');
  const { showToast } = useToast();
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [submitRegistration] = useMutation<RegistrationResponse>(REGISTRATION);
  const { register, handleSubmit, control, setValue, getValues, ...rest } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registrationSchema),
  });
  const submitForm = () => {
    const submit = async values => {
      try {
        await submitRegistration({
          variables: {
            input: {
              ...values,
            },
          },
        });
        setRegistrationComplete(true);
      } catch (e) {
        console.log(e);
        showToast({
          message: e.message,
          status: 'error',
        });
      }
    };
    handleSubmit(submit)();
  };
  return (
    <RegistrationFormContext.Provider
      value={{
        register,
        handleSubmit,
        control,
        setValue,
        getValues,
        ...rest,
      }}
    >
      <Box
        background='white'
        width='600px'
        height='600px'
        display='flex'
        flexDirection='column'
        border='1px solid gray'
        borderRadius='4px'
        padding='15px'
        alignItems='center'
      >
        <Box display='flex' flexDirection='column'>
          <Text>{t('registration.title')}</Text>
        </Box>
        {registrationComplete ? (
          <Box
            display='flex'
            flexDirection='column'
            flex='1'
            gap='20px'
            justifyContent='center'
            alignItems='center'
          >
            <Text textAlign='center'> {t('registration.successMessage')}</Text>
            <Button variant='blumBlack' as={Link} href={appRoutes.LOGIN}>
              {t('registration.btn.signIn')}
            </Button>
          </Box>
        ) : (
          <>
            <Box display='flex' flexDirection='column' flex='1' gap='20px' justifyContent='center'>
              <RegistrationForm />
            </Box>
            <Box display='flex' alignItems='center' gap='20px'>
              <Button variant='blumBlack' onClick={submitForm}>
                {t('registration.btn.submit')}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </RegistrationFormContext.Provider>
  );
};

export default RegistrationContainer;
