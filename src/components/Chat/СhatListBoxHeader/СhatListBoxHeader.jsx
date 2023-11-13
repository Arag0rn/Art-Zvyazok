import { setChatType } from 'Redux/chatSlice';
import { HeaderBox, HeaderLink } from './ChatListBoxHeader.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatType } from 'Redux/selectors/chatSelectors';

export const ChatListBoxHeader = () => {
  const dispatch = useDispatch();
  const isGeneralChat = useSelector(selectChatType);

  return (
    <HeaderBox>
      <HeaderLink
        isGeneralChat={isGeneralChat}
        side="left"
        onClick={() => {
          dispatch(setChatType(true));
        }}
      >
        Загальні чати
      </HeaderLink>
      <HeaderLink
        isGeneralChat={isGeneralChat}
        side="right"
        onClick={() => {
          dispatch(setChatType(false));
        }}
      >
        Особисті чати
      </HeaderLink>
    </HeaderBox>
  );
};
