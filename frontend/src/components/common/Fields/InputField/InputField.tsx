import React, { FC, useContext } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FormContextType } from '../../../../core/context/types';
import {useTranslation} from "next-i18next";
interface Props {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  context: FormContextType;
}
const InputField: FC<Props> = ({ name, label, placeholder, type, context }) => {
  const {
    register,
    formState: { errors },
  } = useContext(context);
  const { t } = useTranslation('common');
  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placeholder} type={type} id={name} {...register(name)} />
      <FormErrorMessage>{errors[name] && t(errors[name].message.toString())}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
