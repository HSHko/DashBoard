const INC = 'counter/INCREASE';
const DEC = 'counter/DECREASE';
const SET_DIFF = 'counter/SET_DIFF';

export const setDiff = diff => ({ type: SET_DIFF, diff });
export const inc = () => ({ type: INC });
export const dec = () => ({ type: DEC });

const initialState = {
  number: 0,
  diff: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF: return {...state,
        diff: action.diff
    };
    case INC: return {...state,
        number: state.number + state.diff
    };
    case DEC: return {...state,
        number: state.number - state.diff
    };
    default: return state;
  }
}