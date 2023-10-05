import { HeaderSty, Logo, HeaderContainer, Nav, NavLink } from "./Header.styled"
import '../../index';

export const Header = () => {
    return <HeaderSty className="header">
    <HeaderContainer className="container header-container">
        <Logo className="logo"></Logo>
        <Nav style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            <NavLink className="nav-link" to="/">Головна</NavLink>
            <NavLink className="nav-link" to="/list_of_chats">Чати</NavLink>
            <NavLink className="nav-link" to="/profile">Профіль</NavLink>
            <NavLink className="nav-link" href="">Правила</NavLink>
            <NavLink className="nav-link" href="">Контакти</NavLink>
        </Nav>
    </HeaderContainer>
</HeaderSty>
}
