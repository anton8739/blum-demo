import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/common/Layout/Layout';

const ConfirmRegistrationPage = () => {
  return <Layout>Email was sended</Layout>;
};
export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
export default ConfirmRegistrationPage;
