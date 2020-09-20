// import produce from 'immer';

const OPEN = 'overlay/OPEN';
const CLOSE = 'overlay/CLOSE';

export const open = () => ({ type: OPEN });
export const close = () => ({ type: CLOSE });

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN: return {...state,
      isOpen: action.true
    };
    case CLOSE: return {...state,
      isOpen: action.false  
    };
  default: return state;}
}