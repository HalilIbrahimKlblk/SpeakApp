import React from 'react';
import './Post.css';

const Post = ({ title, description, level }) => {
  const getLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'kolay':
        return 'easy';
      case 'orta':
        return 'medium';
      case 'zor':
        return 'hard';
      default:
        return '';
    }
  };

  return (
    <div className={`post-div ${getLevelClass(level)}`}>
      <h3 className="post-title">{title}</h3>
      <p className="post-description">{description}</p>
      <span className={`post-level ${getLevelClass(level)}`}>
        Zorluk: {level}
      </span>
    </div>
  );
};

export default Post;
