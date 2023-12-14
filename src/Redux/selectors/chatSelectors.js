import { createSelector } from '@reduxjs/toolkit';

export const selectChatType = state => state.chat.isGeneralChat;

export const selectChatList = state => state.chat.chatList;

export const selectActiveChatTopic = state => state.chat.activeChat?.topic;

export const selectMemberaNumber = state =>
  state.chat.activeChat?.members.length;

export const selectCurrentChatList = createSelector(
  [selectChatType, selectChatList],
  (type, list) => {
    return list.filter(({ isPublic }) => isPublic === type);
  }
);

export const selectFirstPublicChat = createSelector([selectChatList], list => {
  return list.find(({ isPublic }) => isPublic === true).id;
});

export const selectFirstPrivateChat = createSelector([selectChatList], list => {
  return list.find(({ isPublic }) => isPublic === false).id;
});
