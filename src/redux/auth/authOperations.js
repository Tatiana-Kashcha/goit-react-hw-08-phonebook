import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; // було по дз
// axios.defaults.baseURL = 'http://localhost:4000'; // працює по проекту nest локальному
axios.defaults.baseURL = 'https://nestjs-my-rest-api.onrender.com'; // працює по проекту nest з Render-a

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup ---- змінено для проекта nest --- /auth/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // const res = await axios.post('/users/signup', credentials);
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      Notify.failure(
        'Oops, such a user may already exist! Try entering other data.'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login ---- змінено для проекта nest --- /auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // const res = await axios.post('/users/login', credentials);
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      Notify.failure('Oops, something went wrong! Try again later.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout ---- змінено для проекта nest --- /auth/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // await axios.post('/users/logout');
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current ---- змінено для проекта nest --- /auth/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      // const res = await axios.get('/users/current');
      const res = await axios.get('/auth/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
