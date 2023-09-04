import styled from 'styled-components';

export const HeaderSty = styled.div`
    background-color:  #1E0143;
    height: 98px;
    display: flex;
`

export const Logo = styled.div`
    width: 200px;
    height: 50px;
    border-radius: 12px;
    background: #865BBF;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 1360px;
`

export const Nav = styled.nav`
    display: flex;
    column-gap: 75px;
`

export const NavLink = styled.a`
    color: var(--btn-txt, #FFF);
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
    transform: scale(110%);
}
`