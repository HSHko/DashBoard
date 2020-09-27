import React from 'react';
// import styled from 'styled-components';

const Counter = ({number, diff, onInc, onDec, onDiff }) => {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onInc}>+</button>
        <button onClick={onDec}>-</button>
      </div>
    </div>
  );
}

export default Counter;