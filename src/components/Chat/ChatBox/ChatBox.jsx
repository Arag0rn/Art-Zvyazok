import {
  AvatarWrapper,
  ChatBoxSubtitle,
  MainChatBox,
  MainChatForm,
  MainChatHead,
  MainChatHeadBox,
} from './ChatBox.styled';
import { CurrentChat } from '../CurrentChat/CurrentChat';
import { useSelector } from 'react-redux';
import { selectChatType } from 'Redux/selectors/chatSelectors';
import { CompanionAvatar } from '../CompanionAvatar/CompanionAvatar';
import { InputForMess } from '../InputForMess/InputForMess';

export const ChatBox = () => {
  const isGeneralChat = useSelector(selectChatType);

  return (
    <MainChatBox isGeneralChat={isGeneralChat}>
      <MainChatHeadBox>
        <MainChatHead isGeneralChat={isGeneralChat}>
          {isGeneralChat ? 'ЗАГАЛЬНИЙ ЧАТ' : 'ОСОБИСТИЙ ЧАТ'}
        </MainChatHead>
        <ChatBoxSubtitle isGeneralChat={isGeneralChat}>
          265 учасників
        </ChatBoxSubtitle>
        {!isGeneralChat && (
          <AvatarWrapper>
            <CompanionAvatar />
          </AvatarWrapper>
        )}
      </MainChatHeadBox>
      <CurrentChat />
      <MainChatForm isGeneralChat={isGeneralChat}>
        <InputForMess />
      </MainChatForm>
    </MainChatBox>
  );
};
