import { fetchAll } from 'Redux/chat/chatOperations';
import { selectUserId } from 'Redux/selectors/authSelectors';
import { selectChatType } from 'Redux/selectors/chatSelectors';
import { Chat } from 'components/Chat/Chat';
import { PageContainer } from 'components/Container/Container.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ChatPage = () => {
  const userId = useSelector(selectUserId);
  const isPublic = useSelector(selectChatType);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll({ userId, isPublic: isPublic }));
  }, [dispatch, userId, isPublic]);

  return (
    <PageContainer>
      <Chat />
    </PageContainer>
  );
};
