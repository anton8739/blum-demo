import { Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const Home = () => {
  const { t } = useTranslation('common');
  return (
    <div>
      {t('title')}
      <Button variant='blumBlack'>Button</Button>
      <Button variant='blum'>Button</Button>
      <Button variant='pill'>Button</Button>
    </div>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default Home;
