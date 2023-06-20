import { useSelector, useDispatch } from 'react-redux';
import { getCategoriShop } from 'redux/shops/ships-selector';
import { addFood } from 'redux/basket/basket-operations';

import styles from './foodCard.module.scss';
const FoodCard = () => {
  const { foods } = useSelector(getCategoriShop);

  const dispatch = useDispatch();
  const addFoodInBasket = food => {
    dispatch(addFood(food));
  };
  return (
    <>
      {foods.map(food => {
        const { imageUrl, price, title, _id } = food;
        return (
          <div key={_id} className={styles.foodCard}>
            <img className={styles.foodCard__img} alt={title} src={imageUrl} />
            <div className={styles.foodCard__info}>
              <h4 className={styles.foodCard__title}>{title}</h4>
              <p className={styles.foodCard__price}>
                Price:{' '}
                <span className={styles.foodCard__priceNumder}>{price}</span>
              </p>
              <button
                type="button"
                className={styles.foodCard__btn}
                onClick={() => addFoodInBasket(food)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodCard;
