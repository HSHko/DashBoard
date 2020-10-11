import { createAction, handleActions } from "redux-actions";

// ===================================================
// 액션 타입 정의
const ACTIONE_NAME = "module_name/ACTION_NAME";

// ===================================================
// 액션 생성 함수
// 사용예: increment(3), setColor({index: 5, color: #fff})
export const increment = () => ({ type: ACTION_NAME, index });
export const increment = () => {
  return {
    type: ACTION_NAME,
    index,
  };
};
export const setDiff = diff => ({ type: SET_DIFF, diff });
// redux-actions을 사용하는 경우
export const action = createAction(ACTION_NAME);
// 파라미터가 존재하는 경우
// 이 작업이 필수는 아니며 생략해도 동일하게 작동
// 다만 넣어주는 것이 가독성이 좋아진다.
// 함수가 어떤 파라미터를 필요로 하는지 파악할 수 있다.
export const action = createAction(ACTION_NAME, data => data);

// ===================================================
// 모듈의 초기화 상태
const initialState = {
  number: 0,
};
const initialState = {
  number: 0,
  diff: 1,
};
const initialState = {
  isOpen: false,
};
const initialState = {
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "리덕스 배우기",
  },
};

// ===================================================
// Reducer 함수 작성
// Reducer 함수는 이전 상태와 액션 객체를 파라미터로 받는다
// 파라미터 외의 값에는 의존하면 안된다
// 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환한다
// 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INC:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DEC:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
};

export const increment = count => {
  return {
    type: INCREMENT,
    payload: count + 1,
  };
};
const counter = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: action.payload };
    case DECREMENT:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
// <Btn onClick={() => dispatch(actions.increment(count.value))}>+</Btn>

const reducer = handleActions(
  {
    [INCREMENT]: (state, action) => {
      return { number: state.number + 1 };
    },
    [DECREMENT]: ({ number }) => ({ number: number - 1 }),
    [OPEN]: (state, _action) => {
      return produce(state, draft => {
        draft.isOpen = true;
      });
    },
    [CLOSE]: (state, _action) => {
      return produce(state, draft => {
        draft.isOpen = false;
      });
    },
    [START_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = true;
      });
    },
    [FINISH_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = false;
      });
    },
  },
  initialState,
);

export default reducer;

/*
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

  const handleMobileDrawerOn = () => {
    dispatch(mobileDrawers.hi());
  };

*/
