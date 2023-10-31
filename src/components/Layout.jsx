import { Outlet } from 'react-router-dom';


import { Suspense } from 'react';
import { Header } from './Header/Header';
import { GlobalStyle } from './Global.styled';


export const Layout = () => {
  return (<>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
        <GlobalStyle/>
      </Suspense>
      </>

  );
};