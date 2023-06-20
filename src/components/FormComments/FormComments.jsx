import { useSelector, useDispatch } from 'react-redux';
import { randomInteger } from 'utils';

import {
  writeCommentInForm,
  addNewComment,
} from 'redux/comments/comments-operations';
import { getCommentsStore } from 'redux/comments/comments-selectors';

import styles from './formComments.module.scss';

const FormComments = () => {
  const { commentText } = useSelector(getCommentsStore);
  const dispatch = useDispatch();

  const chengeText = ({ target }) => {
    dispatch(writeCommentInForm(target.value));
  };

  const submiteForm = e => {
    e.preventDefault();

    const newComment = {
      body: commentText,
      postId: randomInteger(1, 100),
      userId: randomInteger(1, 100),
    };

    dispatch(addNewComment(newComment));

    dispatch(writeCommentInForm(''));
  };
  return (
    <>
      <form className={styles.formCommensts} onSubmit={submiteForm}>
        <input
          type="text"
          value={commentText}
          className={styles.inputText}
          onChange={chengeText}
        />
        <button type="submit" className={styles.btnSybmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default FormComments;
