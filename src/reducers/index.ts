import { combineReducers } from 'redux';
import { ActionKeys, ActionTypes } from '../actions/index';

function AirPollutionReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_AIR_POLLUTION:
      return [action.payload.data, ...state];
  }
  return state;
}
function CityWeatherReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_CITY_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}

const reducers = combineReducers({
  air: AirPollutionReducer,
  weather: CityWeatherReducer
});

export default reducers;
