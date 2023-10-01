import { Routes, Route } from "react-router-dom";
import { EnterPage } from "pages/EnterPage";
import { Profile } from "pages/Profile";
import { ListOfChatsPage } from "pages/ListOfChats.page";
import { HeaderPage } from "pages/HeaderPage";

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HeaderPage />}>
            <Route index element={<EnterPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/list_of_chats" element={<ListOfChatsPage />} />
        </Route>
    </Routes>
  );
};

