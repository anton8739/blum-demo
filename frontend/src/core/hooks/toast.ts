import { useToast as useChakraToast } from '@chakra-ui/toast';

export const useToast = () => {
  const toast = useChakraToast();

  const showToast = ({ message, status }) => {
    toast({
      duration: 2000,
      isClosable: true,
      description: message,
      status: status,
      position: 'top-right',
    });
  };

  return { showToast };
};
