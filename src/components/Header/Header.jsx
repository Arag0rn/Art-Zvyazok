import { HeaderSty, Logo, HeaderContainer, Nav, NavLink } from "./Header.styled"
import '../../index';
import { Link } from "react-router-dom";

export const Header = () => {
    return <HeaderSty className="header">
    <HeaderContainer className="container header-container">
        <Logo className="logo"></Logo>
        <Nav style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            <Link className="nav-link" to="/homepage">Головна</Link>
            <Link className="nav-link" to="/profile">Профіль</Link>
            <Link className="nav-link" to="/list_of_chats">Чати</Link>
            <NavLink className="nav-link" href="">Щось</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
        </Nav>
    </HeaderContainer>
</HeaderSty>
}
