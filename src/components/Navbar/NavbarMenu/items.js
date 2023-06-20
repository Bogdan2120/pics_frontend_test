import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Shop',
    link: '/shop/kfc',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Shoping cart',
    link: '/shop-cart',
    private: true,
  },
];

export default items;
