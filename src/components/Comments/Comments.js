import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
     
      {comments.map(c => <Comment comment = {c} />)};
    </div>
  );
};

      {/* map through the comments prop and render a Comment for every piece of data */}
   


export default Comments;
