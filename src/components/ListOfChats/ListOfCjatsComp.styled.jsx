import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
`


export const ChatBox = styled.div`
    max-width:348px;
    min-height: 874px;
    border-radius: 35px;
    background-color: #EFE6FF;
`
export const HeaderBox = styled.div`
    display: flex;
    min-height: 54px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #FFCCE8

`
export const ChatHeader = styled.h3`
    color: #160132;
    font-family: Montserrat Alternates;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`


export const HeaderLink = styled.a`
    padding: 16px 10px;
    &:hover{
        border-radius: 35px 35px 35px 0px;
        background: #C7AEE9;
    }
`

export const ChatList = styled.div`
    display: grid;
    min-height: 54px;
    align-items: center;
   
`
export const ChatItem = styled.a`
    padding: 16px;
    color:  #160132;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:hover{
        border-radius: 35px 35px 35px 0px;
        background: #C7AEE9;
    }
`
export const MainChatBox = styled.div`
    display: flex;
    width: 664px;
    min-height: 874px;
    border-radius: 35px;
    background-color: #EFE6FF;
    flex-direction: column;
    justify-content: space-between;
`
export const MainChatHeadBox = styled.div`
    display: flex;
    min-height: 54px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #FFCCE8;


`
export const MainChatHead = styled.h2`
    color: var(--h1, #FF82C6);
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const MainChatListBox = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    height: 100%;
    min-height: 54px;
    padding: 16px;
    overflow: scroll;
    background: radial-gradient(58.4% 92.17% at 100% 50%, #8500EF 0%, #7801D7 19.58%, #5B00A5 37.9%, #45017C 55.88%, #2D0252 76.85%, #170025 100%);
   
`
export const MainChatForm = styled.div`
    display: flex;
    border-radius: 0px 0px 35px 35px;
    background: #EFE6FF;
    padding: 24px 16px;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    height: 94px;
    
`


