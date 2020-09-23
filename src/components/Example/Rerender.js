import React from 'react';

export default React.memo((props) => {
  console.log('RE RENDERED');
  return (
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  )
  
});