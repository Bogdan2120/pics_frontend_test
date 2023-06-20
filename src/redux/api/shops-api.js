import axios from 'axios';

const instanceShop = axios.create({
  baseURL: 'https://eliftech-back-end.onrender.com/api',
});

export const getCategoriShop = async categori => {
  const { data } = await instanceShop.get(`/shop/${categori}`);
  return data;
};

export default instanceShop;
