import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'redux/api/comments-api';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getComments();
      return result;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const fetchDeleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteCommet(id);
      return id;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const writeCommentInForm = createAsyncThunk(
  'comments/writeCommentInForm',
  (text, { rejectWithValue }) => {
    try {
      return text;
    } catch (response) {
      return rejectWithValue(response.data.massage);
    }
  }
);

export const addNewComment = createAsyncThunk(
  'comments/addComment',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addComment(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
