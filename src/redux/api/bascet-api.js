import instanceShop from './shops-api';

export const addCart = async data => {
  const result = await instanceShop.post('/card/', data);
  return result;
};
