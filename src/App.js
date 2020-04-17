import React, { Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import { connect } from "react-redux";
import coronaImage from "./images/image.png";
// import NewsFeed from "./components/NewsFeed";
class App extends Component {
  componentDidMount() {
    // console.log("cdm");
    this.props.fetchData();
  }

  render() {
    // console.log(this.props.data);
    const { data, name } = this.props;
    console.log("data:", data);

    return (
      <div>
        {/* <NewsFeed/> */}
        <div className={styles.container}>
          <img src={coronaImage} alt="COVID-19" className={styles.image} />

          <Cards data={data} name={name} />
          <CountryPicker />
          <Charts data={data} name={name} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(Actions, dispatch) };
};

const mapStateToProps = ({ data, country }) => {
  console.log(data);

  if (country.name === "Global") {
    return { data: data.data, name: country.name };
    console.log("global");
  } else {
    return { data: country.data, name: country.name };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
