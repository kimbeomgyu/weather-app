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
  time?: string;
}
export interface IAppToProps {
  weather: any;
  fetchWeather: any;
}
