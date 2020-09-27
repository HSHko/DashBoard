import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../blocks/Counter";
import * as counter from "store/modules/counter";

export default () => {
  const storeCounter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Counter
        number={storeCounter.number}
        diff={storeCounter.diff}
        onInc={() => dispatch(counter.inc())}
        onDec={() => dispatch(counter.dec())}
        onDiff={() => dispatch(counter.setDiff(storeCounter.diff))}
      />
    </div>
  );
};
