import { useSelector } from 'react-redux';
import { ChatItemText } from './ChatList.styled';
import { selectChatList } from 'Redux/selectors/chatSelectors';
import { useLocation } from 'react-router-dom';

export const ChatList = () => {
  const chatList = useSelector(selectChatList);
  const location = useLocation();

  return (
    <ul>
      {chatList.map(({ topic, id }) => (
        <li key={id}>
          <ChatItemText to={`/list_of_chats/${id}`} state={location}>
            {topic}
          </ChatItemText>
        </li>
      ))}
      {/* <ChatItem>
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
      </ChatItem> */}
    </ul>
  );
};
