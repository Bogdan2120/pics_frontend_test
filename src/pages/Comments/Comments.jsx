import Comment from 'components/Comment/Comment';
import FormComments from 'components/FormComments/FormComments';

import styles from './comments.module.scss';

const Coments = () => {
  return (
    <section className={styles.comentsSection}>
      <Comment />
      <FormComments />
    </section>
  );
};

export default Coments;
