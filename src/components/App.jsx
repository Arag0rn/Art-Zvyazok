

import { GlobalStyle } from "./Global.styled";
import { Container } from "./Container/Container";
import {  Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home"
import { Homepage } from "pages/Home.page";
import { Profile } from "pages/Profile";

export const App = () => {
 

  
    return (
      <Routes>
        <Route path="/"  element={<Home/>}>
        {/* <Container/>
        <GlobalStyle/> */}
         <Route path="/homepage" index element={<Homepage/>}></Route>
         <Route path="/profile" element={<Profile/>}></Route>
         </Route>
      </Routes> 
  );
}