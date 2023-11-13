import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getUser } from "Redux/selectors";

console.log('TEST PAGE');
axios.defaults.baseURL = 'https://art-connect-500c3ee8c10c.herokuapp.com';
// axios.defaults.headers.common.Authorization = `oauth2`;

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';

// };

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);

    try {
      const res = await axios.post('/api/Auth/login', credentials);
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const res = await axios.post('/api/Register/new', newUser);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // setAuthHeader(persistedToken);
      console.log(persistedToken);
      const res = await axios.post('/pi/Token/refresh', persistedToken);

      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const GetAll = createAsyncThunk('auth/GetAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/api/User/all');
    // setAuthHeader(res.data.token);
    console.log(res);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const RegNewEmail = createAsyncThunk(
//   'email/addEmail',
//   async (credentials, thunkAPI) => {
//   try {
//     const response = await axios.post('/Register/new', credentials);
//     console.log(response.data)
//     return response.data
//     ;
//   } catch (err) {
//     console.error(err.toJSON())
//   }
// }
// )

// export const RegNewUser = createAsyncThunk(
//   'user/addUser',
//   async (credentials, thunkAPI) => {
//     console.log(credentials);
//   try {
//     const response = await axios.post('/Register/new', {
//       "id": 0,
//       "createdAt": "2023-10-08T18:13:32.804Z",
//       "updatedAt": "2023-10-08T18:13:32.804Z",
//       "email": `${credentials.email}`,
//       "username": `${credentials.nickname}`,
//       "firstName": "string",
//       "lastName": "string",
//       "password": `${credentials.password}`

//     });
//     console.log(response.data)
//     return response.data
//     ;
//   } catch (err) {
//     console.error(err.toJSON())
//   }
// }
// )

// export const GetNewUser = async () => {
//   try {
//     const response = await axios.get(
//       "https://localhost:7257/api/User/all",

//       {
//           headers: {
//               Authorization: `Bearer ${apiKey}`,
//               "Content-Type": 'application/json'
//           }
//       }
//     );

//     if (response.data.result === "success") {
//       console.log(response.data);
//     } else {
//       console.log(response.data);
//     }
//   } catch (error) {
//     console.error("Ошибка аутентификации", error);
//   }
// };
