import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBasket } from 'redux/basket/basket-selectors';
import { addAmountFood } from 'redux/basket/basket-operations';

import styles from './foodBasket.module.scss';
const FoodBasket = () => {
  const [food, setFood] = useState([]);
  const { foods } = useSelector(getBasket);

  const dispatch = useDispatch();
  useEffect(() => {
    if (food.length !== 0) {
      dispatch(addAmountFood(food));
      return;
    }

    if (food.length === 0 && foods.length !== 0) {
      const items = [];
      foods.map(item => items.push({ ...item, amount: 1 }));
      setFood([...items]);
    }
  }, [food, dispatch, foods]);

  const amountFood = (amountValue, id) => {
    const newFood = food.map(item =>
      item._id === id
        ? {
            ...item,
            amount: Number(amountValue),
          }
        : item
    );
    setFood(newFood);
  };

  return (
    <>
      {foods.map(({ imageUrl, price, title, _id }) => {
        return (
          <div key={_id} className={styles.foodCard}>
            <img className={styles.foodCard__img} alt={title} src={imageUrl} />
            <div className={styles.foodCard__info}>
              <h4 className={styles.foodCard__title}>{title}</h4>
              <p className={styles.foodCard__price}>
                Price:
                <span className={styles.foodCard__priceNumder}>{price}</span>
              </p>
              <input
                type="number"
                name="amount"
                min="1"
                max="200"
                step="1"
                onChange={e => {
                  const amountValue = e.target.value;
                  amountFood(amountValue, _id);
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodBasket;
