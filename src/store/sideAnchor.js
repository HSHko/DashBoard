const HI = "sideAnchor/HI";
const LO = "sideAnchor/LO";

export const hi = () => ({
  type: HI,
});
export const lo = () => ({
  type: LO,
});

const initialState = {
  isHi: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HI:
      return {
        ...state,
        isHi: true,
      };
    case LO:
      return {
        ...state,
        isHi: false,
      };
    default:
      return state;
  }
};
