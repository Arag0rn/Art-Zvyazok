import { Routes, Route } from "react-router-dom";
import { EnterPage } from "pages/EnterPage";
import { ProfilePage } from "pages/ProfilePage";
import { ListOfChatsPage } from "pages/ListOfChats.page";
import { HeaderPage } from "pages/HeaderPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./Api";


export const App = () => {
  const dispatch = useDispatch();


  

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <Routes>
        <Route path="/" element={<HeaderPage />}>
            <Route index element={<EnterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/list_of_chats" element={<ListOfChatsPage />} />
        </Route>
    </Routes>
  );
};

