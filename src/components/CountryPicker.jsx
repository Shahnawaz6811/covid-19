import React, { useEffect } from "react";
import {
  NativeSelect,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import * as Actions from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CountryPicker.module.css";
import SelectSearch from "react-select-search";
import "./select_search.css";

const CountryPicker = () => {
  const dispatch = useDispatch();

  const countries = useSelector(({ countries }) => countries);
  const { data } = countries;
  console.log('countries: ',countries ); //object which has countries array

  const options =
    data.countries &&
    data.countries.map((c) => {
      return { name: c.name, value: c.name };
    });

  options && options.splice(0, 0, { name: "Global", value: "Global" });

  useEffect(() => {
    dispatch(Actions.fetchCountries());
  }, []);

  const fetchCountry = (value) => {
    dispatch(Actions.fetchCountry(value));
  };

  return (
    <FormControl className={styles.formControl}>
      <SelectSearch
        options={options}
        defaultValue="India"
        name="India"
        search
        autoComplete="on"
        onChange={fetchCountry}
        placeholder="Choose Country"
      />

      {/* <NativeSelect default="" onChange={fetchCountry}>
        <option value="Global">Global</option>

        {data.countries &&
          data.countries.map((country) => (
            <option value={country.name} key={country.name}>
              {country.name}
            </option>
          ))}
      </NativeSelect> */}
    </FormControl>
  );
};

export default CountryPicker;
