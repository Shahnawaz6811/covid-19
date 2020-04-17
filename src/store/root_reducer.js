import {combineReducers} from 'redux'

import data from './reducer';
import dailyData from './daily_data_reducer';
import countries from './countries_reducer';
import country from './country_reducer';

export default combineReducers({
  data,dailyData,countries,country
})