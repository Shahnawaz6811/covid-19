const defaultState = {
  data: {},
  meta: {
    fetching: false,
    fetch_error: null,
  },

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "REQUEST_COUNTRIES":
      return { ...state, meta: { ...state.meta, fetching: true } };

    case "REQUEST_COUNTRIES_SUCCESS":
      // console.log(action);
      return {
        ...state,
        data: action.payload,
        meta: { ...state.meta, fetching: false, fetch_error: false },
      };

    case "REQUEST_COUNTRIES_FAILED":
      return {
        ...state,
        meta: { ...state.meta, fetching: false, fetch_error: true },
      };

   

    default:
      return state;
  }
};
