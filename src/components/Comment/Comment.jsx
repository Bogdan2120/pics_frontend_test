import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LetteredAvatar from 'react-lettered-avatar';

import {
  fetchComments,
  fetchDeleteComment,
} from 'redux/comments/comments-operations.js';
import { getCommentsStore } from 'redux/comments/comments-selectors';

import styles from './comment.module.scss';
const arrayWithColors = [
  '#2ecc71',
  '#3498db',
  '#8e44ad',
  '#e67e22',
  '#e74c3c',
  '#1abc9c',
  '#2c3e50',
];

const Comment = () => {
  const { comments } = useSelector(getCommentsStore);

  const dispatch = useDispatch();

  useEffect(() => {
    if (comments.length === 0) {
      dispatch(fetchComments());
    }
  }, [dispatch, comments]);

  const deleteComment = id => {
    dispatch(fetchDeleteComment(id));
  };
  return (
    <ul className={styles.contsinerComments}>
      {comments.map(({ id, body, user }) => {
        return (
          <li key={id} className={styles.bodyComent}>
            <div className={styles.bodyUser}>
              <div className={styles.iconUser}>
                <LetteredAvatar
                  name={user.username}
                  size={40}
                  radius={20}
                  color="#fff"
                  backgroundColors={arrayWithColors}
                />
              </div>
              <p className={styles.nickUser}>{user.username}</p>
            </div>
            <p className={styles.commentText}>{body}</p>
            <button
              type="button"
              className={styles.btnDel}
              onClick={() => deleteComment(id)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Comment;
