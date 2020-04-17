import React, { useEffect } from "react";
import * as Actions from "../store/actions";
import styles from "./Charts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Line, Bar } from "react-chartjs-2";
const Charts = (props) => {
  /** Selector which works similar to mapStateToProps,called with entire
  store state tree.Runs when component renders and when action is dispatch
  works similar to subscribe()
  On action dispatch, prev return value of selector and current is compared,
  and component is re-rendered only if both values(reference) are not same
  From Docs: You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux store.*/
  const dailyData = useSelector((state) => state.dailyData);
  // console.log('dailyChartData: ',dailyData.data);

  const dispatch = useDispatch();
  // Runs after component is mounted/updated to dom
  useEffect(() => {
    // our effect function
    dispatch(Actions.fetchDailyData());

    /**return  optional cleanup function, which is called before component
    re-renders to clean up the prev effect*/
    return () => {
      console.log("Cleaning up");
    };
  }, []);

  const { data } = dailyData;

  // total confirmed cases
  const confirmedCases = data.map(({ confirmed }) => confirmed.total);
  const deaths = data.map(({ deaths }) => deaths.total);
  // console.log('confirmed',confirmedCases);

  const reportDates = data.map((data) => data.reportDate);
  // console.log(reportDates);
  const chartData = {
    labels: reportDates, //x-axis labels
    datasets: [
      {
        label: "Infected",
        borderColor: "#3333ff",
        fill: true,
        data: confirmedCases,
      },
      {
        label: "Deaths",
        borderColor: "red",
        fill: true,
        backgroundColor: "rgba(255,0,0,0.5)",
        data: deaths,
      },
    ],
  };


  const country = useSelector((state) => state.country);
  console.log("country: ", country.data.confirmed);

  const countryConfirmed=country.data.confirmed && country.data.confirmed.value
  const countryRecovered=country.data.recovered && country.data.recovered.value
  const countryDeaths=country.data.deaths && country.data.deaths.value
  console.log(countryConfirmed, countryRecovered,countryDeaths)


  // const { data } = country;
  const barData = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        backgroundColor: [
          "rgba(0,0,255,0.5)",
          "rgba(0,255,0,0.5)",
          "rgba(255,0,0,0.5)",
        ],
        data: [countryConfirmed, countryRecovered,countryDeaths],
      },
    ],
  };

  return (
    <div className={styles.container}>
      {country.name === "Global" ? (
        <Line data={chartData} />
      ) : (
        <Bar
          data={barData}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: `Current State in ${country.name}`,
            },
          }}
        />
      )}
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return { ...bindActionCreators(Actions, dispatch) };
// };

// const mapStateToProps = ({ dailyData }) => {
//   return dailyData;
// };

export default Charts;
