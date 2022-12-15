import React from 'react';
import { Box } from '@chakra-ui/react';
import RegistrationContainer from '@/components/modules/Registration/RegistrationContainer/RegistrationContainer';

const Registration = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' flex='1'>
      <RegistrationContainer />
    </Box>
  );
};

export default Registration;
