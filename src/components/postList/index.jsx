import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  postList : PropTypes.array, 
};

PostList.defaultProps = {
  postList : [], 
};

function PostList(props) {
  console.log(props, 'props');
  
  const { postList } = props;
  return (
    <div>
      <ul>
      {
        postList.map((item, index)=>(
          <li key={index}>{item.title}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default PostList;