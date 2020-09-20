
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'components/Counter';
import * as counter from 'store/modules/counter';

export default () => {
  const storeCounter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <Counter
      number={storeCounter.number}
      diff={storeCounter.diff}
      onInc={() => dispatch(counter.inc())}
      onDec={() => dispatch(counter.dec())}
      onDiff={() => dispatch(counter.setDiff(storeCounter.diff + 1))}
    />
  );
}
