import { createSlice } from '@reduxjs/toolkit';
import {
  fetchComments,
  fetchDeleteComment,
  writeCommentInForm,
  addNewComment,
} from './comments-operations';
const initialState = {
  comments: [],
  commentText: '',
  isLoading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchComments.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchComments.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.comments = payload;
      })
      .addCase(fetchComments.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteComment.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(fetchDeleteComment.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.comments.findIndex(item => item.id === payload);
        store.comments.splice(index, 1);
      })
      .addCase(fetchDeleteComment.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(writeCommentInForm.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(writeCommentInForm.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.commentText = payload;
      })
      .addCase(writeCommentInForm.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(addNewComment.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(addNewComment.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.comments.push(payload);
      })
      .addCase(addNewComment.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default commentsSlice.reducer;
