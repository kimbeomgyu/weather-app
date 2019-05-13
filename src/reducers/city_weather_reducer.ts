import { ActionKeys, ActionTypes } from '../actions/index';

function CityWeatherReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_CITY_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}

export default CityWeatherReducer;
