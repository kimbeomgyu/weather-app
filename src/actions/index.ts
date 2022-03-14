export enum ActionKeys {
  FETCH_AIR_POLLUTION = "FETCH_AIR_POLLUTION",
  FETCH_CITY_WEATHER = "FETCH_CITY_WEATHER",
}

export interface IAirPollution {
  readonly type: ActionKeys.FETCH_AIR_POLLUTION;
  readonly payload: {
    readonly data: object;
  };
}

export interface ICityWeather {
  readonly type: ActionKeys.FETCH_CITY_WEATHER;
  readonly payload: {
    readonly data: object;
  };
}

export type ActionTypes = IAirPollution | ICityWeather;
