
import {  Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home"
import { Homepage } from "pages/Home.page";
import { Profile } from "pages/Profile";
import { ListOfChats } from "pages/ListOfChats";


export const App = () => {
 

  
    return (
      <Routes>
        <Route path="/"  element={<Home/>}>
         <Route path="/homepage" index element={<Homepage/>}></Route>
         <Route path="/profile" element={<Profile/>}></Route>
         <Route path="/list_of_chats" element={<ListOfChats/>}></Route>
         </Route>
      </Routes> 
  );
}