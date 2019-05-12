import { combineReducers } from 'redux';
import { ActionKeys, ActionTypes } from '../actions/index';

function WeatherReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}

const reducers = combineReducers({
  weather: WeatherReducer
});

export default reducers;
