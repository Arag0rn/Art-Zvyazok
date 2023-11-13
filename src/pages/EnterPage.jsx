import { RegistrPage } from './Registr.page';
import { MainTxt } from 'components/Main.txt/Main.txt';
import { ContentWraper } from 'components/Container/Container.styled';

export const EnterPage = () => {
  return (
    <>
      <ContentWraper>
        <RegistrPage />
        <MainTxt />
      </ContentWraper>
    </>
  );
};
