import axios from 'axios';

const instanceComments = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getComments = async () => {
  const { data } = await instanceComments.get(`/comments`);
  return data.comments;
};

export const deleteCommet = async id => {
  await instanceComments.delete(`/comments/${id}`);
};

export const addComment = async data => {
  const { data: result } = await instanceComments.post('/comments/add', data);
  return result;
};

export default instanceComments;
