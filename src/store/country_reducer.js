const defaultState = {
    name : 'Global',
    data : {}
};

export default (state=defaultState, action) => {
  switch(action.type) {

    case "REQUEST_COUNTRY":
      // console.log("REQUEST_COUNTRY");
      return { ...state, name: action.payload };

    case "REQUEST_COUNTRY_SUCCESS":
      // console.log('REQUEST_COUNTRY_SUCCESS');
      return {...state,data:action.payload }

      default:
        return state;
  }

}
