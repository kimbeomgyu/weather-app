import { ActionKeys, ActionTypes } from '../actions/index';

function AirPollutionReducer(state = [], action: ActionTypes) {
  switch (action.type) {
    case ActionKeys.FETCH_AIR_POLLUTION:
      return [action.payload.data, ...state];
  }
  return state;
}

export default AirPollutionReducer;
