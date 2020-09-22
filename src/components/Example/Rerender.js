import React from 'react';

export default React.memo((props, theme) => {
  console.log('RE DDD RENDERED');
  return (
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  )
  
});