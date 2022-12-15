import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginContainer from '@/components/modules/Login/LoginContainer/LoginContainer';

const Login = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flex='1'>
      <LoginContainer />
    </Box>
  );
};

export default Login;
