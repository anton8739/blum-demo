import * as yup from 'yup';
import { LOGIN_FIELDS, REGISTRATION_FIELDS } from '../constants/fields';
export const loginSchema = yup.object().shape({
  [LOGIN_FIELDS.EMAIL]: yup.string().trim().email('validation.emailType').required('validation.required'),
  [LOGIN_FIELDS.PASSWORD]: yup
    .string()
    .trim()
    .required('validation.required')
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'validation.passwordType'),
});
export const registrationSchema = yup.object().shape({
  [REGISTRATION_FIELDS.USERNAME]: yup.string().trim().required('validation.required'),
  [REGISTRATION_FIELDS.EMAIL]: yup
    .string()
    .trim()
    .email('validation.emailType')
    .required('validation.required'),
  [REGISTRATION_FIELDS.PASSWORD]: yup
    .string()
    .trim()
    .required('validation.required')
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'validation.passwordType'),
});
