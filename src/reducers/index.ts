import { combineReducers } from 'redux';
import { ActionKeys, ActionTypes } from '../actions/index';

function WeatherReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
function WeatherReducer2(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_WEATHER2:
      return [action.payload.data, ...state];
  }
  return state;
}

const reducers = combineReducers({
  weather: WeatherReducer,
  weather2: WeatherReducer2
});

export default reducers;
