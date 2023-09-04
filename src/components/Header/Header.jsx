import { HeaderSty, Logo, HeaderContainer, Nav, NavLink } from "./Header.styled"

export const Header = () => {
    return <HeaderSty className="header">
    <HeaderContainer className="container header-container">
        <Logo className="logo"></Logo>
        <Nav>
            <NavLink className="nav-link" href="">Головна</NavLink>
            <NavLink className="nav-link" href="">Профіль</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
            <NavLink className="nav-link" href="">Щось</NavLink>
        </Nav>
    </HeaderContainer>
</HeaderSty>
}