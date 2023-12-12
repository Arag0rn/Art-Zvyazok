import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://ctc.fly.dev';

export const fetchAll = createAsyncThunk(
  'chatList/fetchPublic',
  async ({ userId, isPublic }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Chat/inbox?userId=${userId}&isPublic=${isPublic}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
