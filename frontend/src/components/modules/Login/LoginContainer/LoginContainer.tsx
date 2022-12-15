import React, { useContext } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { AppContext, LoginFormContext } from '../../../../core/context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../../../core/utils/validationShema';
import LoginForm from '@/components/modules/Login/LoginContainer/LoginForm/LoginForm';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../../../../core/apollo/mutation';
import { useToast } from '../../../../core/hooks/toast';
import { LoginResponse } from '../../../../core/apollo/types';
import { useRouter } from 'next/router';
import { appRoutes } from '../../../../core/constants';
import { setCookie } from 'cookies-next';
const LoginContainer = () => {
  const { t } = useTranslation('common');
  const { setIsAuth, setUser } = useContext(AppContext);
  const { showToast } = useToast();
  const router = useRouter();
  const [submitLogin] = useMutation<LoginResponse>(LOG_IN);
  const { register, handleSubmit, control, setValue, getValues, ...rest } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });
  const submitForm = () => {
    const submit = async values => {
      try {
        const response = await submitLogin({
          variables: {
            input: {
              ...values,
            },
          },
        });
        setCookie('token', response.data.login.jwt);
        setIsAuth(true);
        setUser(response.data.login.user);
        router.push(appRoutes.HOME);
      } catch (e) {
        showToast({
          message: e.message,
          status: 'error',
        });
      }
    };
    handleSubmit(submit)();
  };
  return (
    <LoginFormContext.Provider
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
          <Text>{t('login.title')}</Text>
        </Box>
        <Box display='flex' flexDirection='column' flex='1' gap='20px' justifyContent='center'>
          <LoginForm />
        </Box>
        <Box display='flex' alignItems='center' gap='20px'>
          <Button variant='blumBlack' onClick={submitForm}>
            {t('login.btn.submit')}
          </Button>
        </Box>
      </Box>
    </LoginFormContext.Provider>
  );
};

export default LoginContainer;
