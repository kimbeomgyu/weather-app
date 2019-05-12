import axios from 'axios';
const API_KEY = '4b414f7851777031363475514b545a';
const API_KEY2 = '6e2056d67584bf69e1c2fc725cff65ec';
const ROOT_URL = `http://openAPI.seoul.go.kr:8088/${API_KEY}`;
const CITY_ID = '1835847';
const ROOT_URL2 = `https://api.openweathermap.org/data/2.5/`;
export enum ActionKeys {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER2 = 'FETCH_WEATHER2'
}

export interface IFetchWeather {
  readonly type: ActionKeys.FETCH_WEATHER;
  readonly payload: {
    readonly data: object;
  };
}

export interface IFetchWeather2 {
  readonly type: ActionKeys.FETCH_WEATHER2;
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
export function fetchWeather2() {
  const url = `${ROOT_URL2}weather?id=${CITY_ID}&appid=${API_KEY2}`;
  const request = axios.get(url);

  return {
    payload: request,
    type: ActionKeys.FETCH_WEATHER2
  };
}

export type ActionTypes = IFetchWeather | IFetchWeather2;
