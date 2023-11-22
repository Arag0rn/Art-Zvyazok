import { HeaderSty, Logo, HeaderContainer, Nav, NavLink, ProfMod, ProfBox } from "./Header.styled"
import '../../index';
import { useAuth } from "Redux/hooks/useAuth";
import { ReactComponent as Prof } from "./profile.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const { isLoggedIn } = useAuth();
    const [isProfModVisible, setProfModVisible] = useState(true);
   

    const toggleProfModVisibility = () => {
        setProfModVisible(!isProfModVisible);
      };
    

    return <HeaderSty className="header">
    <HeaderContainer className="container header-container">
        <Logo className="logo"></Logo>
        {isLoggedIn &&
       ( <Nav>
            <NavLink className="nav-link" to="/main">Головна</NavLink>
            <NavLink className="nav-link" to="/list_of_chats">Чати</NavLink>
            <NavLink className="nav-link" to="#">Контакти</NavLink>
            <NavLink className="nav-link" href="">Правила</NavLink>
            <ProfBox>
                <ProfMod style={{ display: isProfModVisible ? 'none' : 'flex' }}>
                    <Link className="nav-link" to="/profile">Редагувати профіль</Link>
                    <p>Вийти з профілю</p>
                </ProfMod>

                <Prof onClick={toggleProfModVisibility}></Prof>
             </ProfBox>
            
            
        </Nav>)}

       
    </HeaderContainer>
</HeaderSty>
}
