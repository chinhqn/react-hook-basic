import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
}

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  function handleChangeValue(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      'title': value 
    }
    onSubmit(data);
    setValue('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChangeValue}/>
      </form>
    </div>
  );
}

export default TodoForm;