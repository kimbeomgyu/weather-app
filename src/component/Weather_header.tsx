import * as React from 'react';
import { StatelessComponent as Component } from 'react';
import { IWHToProps } from '../Type';
import WeatherIcon from './Weather_icon';

const WeatherHeader: Component<IWHToProps> = ({ temp, description, icon }) => {
  return (
    <header>
      <h1>서울</h1>
      <WeatherIcon icon={icon} />
      <h2>{(temp - 273.15).toFixed(1)}℃</h2>
      <h2>{description}</h2>
    </header>
  );
};

export default WeatherHeader;
