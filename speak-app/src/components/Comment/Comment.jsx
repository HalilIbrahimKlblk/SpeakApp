import React from 'react';
import './Comment.css';

const Comment = ({img,username,comment}) => {
  return (
    <div className='comment-container'>
      <div className='comment-left'>
        <img src={img} alt='User' className='user-avatar' />
        <p className='username'>{username}</p>
      </div>
      <div className='comment-right'>
        <p className='comment-text'>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
