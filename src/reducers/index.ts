import { combineReducers } from "redux";
import AirPollutionReducer from "./air_pollution_reducer";
import CityWeatherReducer from "./city_weather_reducer";

const reducers = combineReducers({
  air: AirPollutionReducer,
  weather: CityWeatherReducer,
});

export default reducers;
