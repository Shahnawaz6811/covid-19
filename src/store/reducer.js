const defaultState = {
  data: {},
  meta: {
    fetching: false,
    fetch_error: null,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "REQUEST_DATA":
      return { ...state, meta:{...state.meta,fetching: true} };

    case "REQUEST_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        meta: {
          ...state.meta,fetching: false,
          fetch_error: false,
        }

      };

    case "REQUEST_DATA_FAILED":
      return { ...state,  meta: {
        ...state.meta,fetching: false,
        fetch_error: true,
      } };

    default:
      return state;
  }
};
