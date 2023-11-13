import { ChatItem, ChatItemText } from './ChatList.styled';

export const ChatList = () => {
  return (
    <ul>
      <ChatItem>
        <ChatItemText>Чат</ChatItemText>
      </ChatItem>
      <ChatItem>
        <ChatItemText $isActive>Чат</ChatItemText>
      </ChatItem>
      <ChatItem>
        <ChatItemText>Чат</ChatItemText>
      </ChatItem>
      <ChatItem>
        <ChatItemText>Чат</ChatItemText>
      </ChatItem>
    </ul>
  );
};
