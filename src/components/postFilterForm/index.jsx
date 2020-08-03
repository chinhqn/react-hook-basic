import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [ searchTerms, setSearchTerms ] = useState('');
  const typingTimeoutRef = useRef(null);
  function onHandleChange(e) {
    e.preventDefault();
    let value = e.target.value;

    setSearchTerms(e.target.value);
    
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerms : value,
      }
      onSubmit(formValue);
    }, 300);
    
  } 
  return (
    <div>
        <form >
          <input type="text"
            value={searchTerms}
            onChange={onHandleChange}
          />  
        </form>   
    </div>
  );
}

export default PostFilterForm;