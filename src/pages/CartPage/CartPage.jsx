import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import FoodBasket from 'components/FoodBasket/FoodBasket';
import { getBasket } from 'redux/basket/basket-selectors';
import { addCart } from 'redux/basket/basket-operations';
import styles from './cartPage.module.scss';

const CartPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const { amountFood, status } = useSelector(getBasket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (amountFood.lenght !== 0) {
      const totalPrice = amountFood.reduce((total, item) => {
        return total + Number(item.price) * Number(item.amount);
      }, 0);
      setPrice(totalPrice);
    }
    if (status === '201') {
      console.log();
    }
  }, [amountFood]);

  const submitCard = e => {
    e.preventDefault();
    if (price === 0) {
      Report.warning('Warning', 'Please, add foods', 'Okey');
      console.log(0);
      return;
    }
    const cart = {
      name,
      email,
      phone,
      adress: address,
      totalPrice: price,
      foods: amountFood,
    };

    dispatch(addCart(cart));
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPrice(0);
  };
  return (
    <div className={styles.sectionHome}>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <form id="cardForm" className={styles.cardForm} onSubmit={submitCard}>
            <label className={styles.cardForm__ladle}>
              Name:
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="Name"
                value={name}
                className={styles.cardForm__input}
                onChange={({ target }) => setName(target.value)}
                required
              />
            </label>
            <label className={styles.cardForm__ladle}>
              Email:
              <input
                type="text"
                name="email"
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                placeholder="Email"
                value={email}
                className={styles.cardForm__input}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <label className={styles.cardForm__ladle}>
              Phone:
              <input
                type="tel"
                name=" phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="000-000-0000"
                value={phone}
                className={styles.cardForm__input}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className={styles.cardForm__ladle}>
              Address:
              <input
                type="text"
                name="address"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                placeholder="Address"
                value={address}
                className={styles.cardForm__input}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
          </form>
          <div className={styles.foodCart}>
            <FoodBasket />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.totalPrice}>
            Total price <span className={styles.totalPriceNumber}>{price}</span>
          </p>
          <button type="submit" form="cardForm" className={styles.submite}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
