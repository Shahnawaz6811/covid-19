import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_DATA" });

    try {
      const response = await axios.get(url);
      dispatch({ type: "REQUEST_DATA_SUCCESS", payload: response.data });
      // console.log(response);
    } catch (error) {
      // console.log('error:',error);
      dispatch({ type: "REQUEST_DATA_FAILED" });
    }
  };
};

export const fetchDailyData = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_DAILY_DATA" });

    try {
      const response = await axios.get(`${url}/daily`);
      // console.log(response);
      dispatch({
        type: "REQUEST_DAILY_DATA_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: "REQUEST_DAILY_DATA_FAILED" });
    }
  };
};

export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_COUNTRIES" });

    try {
      const response = await axios.get(`${url}/countries`);
      // console.log(response);
      dispatch({
        type: "REQUEST_COUNTRIES_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: "REQUEST_COUNTRIES_FAILED" });
    }
  };
};

export const fetchCountry = (country) => {

  return async (dispatch) => {

    dispatch({ type: "REQUEST_COUNTRY", payload: country});

    if(country === 'Global') {
        fetchData();
        return;
    }

    try {

      const response = await axios.get(`${url}/countries/${country}`);
      // console.log("response");
      dispatch({
        type: "REQUEST_COUNTRY_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      // console.log("error");
      dispatch({ type: "REQUEST_COUNTRY_FAILED" });
    }
  };
};
