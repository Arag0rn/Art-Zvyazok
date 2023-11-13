const { createSlice } = require('@reduxjs/toolkit');

// const defaultStatus = {
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// };

const initialState = { isGeneralChat: true, isLoading: false, error: null };

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatType: {
      reducer(state, action) {
        state.isGeneralChat = action.payload;
      },
    },
  },
});

export const { setChatType } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
