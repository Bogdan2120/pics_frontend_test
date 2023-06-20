import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import styles from './shopPage.module.scss';
import { fetchCategoriShop } from 'redux/shops/shops-operations';
import { getCategoriShop } from 'redux/shops/ships-selector';

import FoodCard from 'components/FoodCard/FoodCard';
import Sidebar from 'components/Sidebar/Sidebar';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { isLoading } = useSelector(getCategoriShop);

  useEffect(() => {
    dispatch(fetchCategoriShop(category));
  }, [dispatch, category]);

  return (
    <div className={styles.sectionShop}>
      <div className={styles.container}>
        <div className={styles.containerSidebar}>
          <Sidebar />
        </div>
        <div className={styles.foodContainer}>
          {isLoading &&
            Loading.standard('Loading...', {
              backgroundColor: 'rgba(0,0,0,0.8)',
              svgColor: '#ff6f00',
            })}

          {!isLoading && <FoodCard />}
          {!isLoading && Loading.remove()}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
