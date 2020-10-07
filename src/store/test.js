const INC = "test/INC";

export const inc = () => ({
  type: INC,
});

const initialState = {
  num: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        num: state.num + 1,
      };
    default:
      return state;
  }
};
