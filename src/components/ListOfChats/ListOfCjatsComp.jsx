import { InputForMess } from "components/ImputForMess/ImputForMess";
import { ChatBox, ChatList, ChatHeader, HeaderBox, HeaderLink, ChatItem, MainChatBox, ChatContainer, MainChatHeadBox, MainChatHead, MainChatListBox, MainChatForm } from "./ListOfCjatsComp.styled"
import { IncommingMsg } from "./IncommingMsg/IncommingMsg";
import {OutMsg} from './OutMsg/OutMsg'
import { ProfileBox } from "./ProfileCom/ProfileBox";



export const ListOfChats = ()=>{

    return (
        <ChatContainer>
        <ChatBox>
            <HeaderBox>
            <HeaderLink href="#">
                <ChatHeader>Загальні чати</ChatHeader>
            </HeaderLink>
            <HeaderLink href="#">
                <ChatHeader>Особисті чати</ChatHeader>
            </HeaderLink>
            </HeaderBox>
            <ChatList>
                <ChatItem href="#">Чат</ChatItem>
                <ChatItem href="#">Чат</ChatItem>
                <ChatItem href="#">Чат</ChatItem>
                <ChatItem href="#">Чат</ChatItem>
            </ChatList>
        </ChatBox>

        <MainChatBox >
            <MainChatHeadBox>
            <MainChatHead>ЗАГАЛЬНИЙ ЧАТ</MainChatHead>
            </MainChatHeadBox>
            <MainChatListBox>
            <IncommingMsg></IncommingMsg>
            <OutMsg></OutMsg>
            </MainChatListBox>
            <MainChatForm>
                <InputForMess/>
            </MainChatForm>
        </MainChatBox>

        <ProfileBox/>
       
        </ChatContainer>

        
    )
}