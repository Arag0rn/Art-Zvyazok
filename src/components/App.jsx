import { Routes, Route } from 'react-router-dom';
import { EnterPage } from 'pages/EnterPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ChatPage } from 'pages/ChatPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './api';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';

import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { UserPage } from 'pages/UserPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EnterPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/main" component={<EnterPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<ProfilePage />} />
            }
          />
          <Route
            path="/list_of_chats"
            element={
              <PrivateRoute redirectTo="/login" component={<ChatPage />} />
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute redirectTo="/login" component={<MainPage />} />
            }
          />

            <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          
        </Route>
      
 
      </Routes>
      <GlobalStyle />
    </>
  );
};
