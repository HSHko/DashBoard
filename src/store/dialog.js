const HI = "dialog/HI";
const LO = "dialog/LO";

export const hi = input => ({
  type: HI,
  payload: input,
});
export const lo = () => ({
  type: LO,
});

const initialState = {
  isHi: false,
  trgt: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HI:
      return {
        ...state,
        isHi: true,
        trgt: action.payload,
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
