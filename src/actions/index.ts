import axios from 'axios';
const API_KEY = '4b414f7851777031363475514b545a';
const ROOT_URL = `http://openAPI.seoul.go.kr:8088/${API_KEY}`;

export enum ActionKeys {
  FETCH_WEATHER = 'FETCH_WEATHER'
}

export interface IFetchWeather {
  readonly type: ActionKeys.FETCH_WEATHER;
  readonly payload: {
    readonly data: object;
  };
}

export function fetchWeather() {
  const url = `${ROOT_URL}/json/ListAvgOfSeoulAirQualityService/1/5/`;
  const request = axios.get(url);

  return {
    payload: request,
    type: ActionKeys.FETCH_WEATHER
  };
}

export type ActionTypes = IFetchWeather;
