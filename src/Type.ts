export interface IDataType {
  name1: string;
  name2: string;
  value1: number;
  value2: number;
}

export interface ITableToProps {
  name: string;
  value: number;
}

export interface IAppToStates {
  data: IDataType[];
  icon?: string;
  time?: string;
  temp?: number;
  description?: string;
}

export interface IAppToProps {
  air: any;
  weather: any;
  airPollution: any;
  cityWeather: any;
}

export interface IWHToProps {
  temp: number;
  icon: string;
  description: string;
}
