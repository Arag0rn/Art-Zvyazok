import { Routes, Route } from "react-router-dom";
import { EnterPage } from "pages/EnterPage";
import { ProfilePage } from "pages/ProfilePage";
import { ListOfChatsPage } from "pages/ListOfChats.page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./Api";
import { MainPage } from "pages/MainPage";
import { PrivateRoute } from "PrivateRoute";
import { RestrictedRoute } from "RestrictedRoute";
import { selectToken } from "Redux/selectors";
import { Layout } from "./Layout";


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)

  

  // useEffect(() => {
  //   dispatch(refreshUser(token));
  // }, [dispatch, token]);


  return (
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<EnterPage />} /> 
        <Route path="login"  element={
          <RestrictedRoute redirectTo="/main" component={<EnterPage />}  />} />
        <Route path="/profile" element={
          <PrivateRoute redirectTo="/" component={<ProfilePage />} />} /> 
        <Route path="/list_of_chats" element={
          <PrivateRoute redirectTo="/" component={<ListOfChatsPage />} />} />          
       <Route path="/main" element={
          <PrivateRoute redirectTo="/" component={<MainPage />} />} />
        </Route>
    </Routes>
  );
};

