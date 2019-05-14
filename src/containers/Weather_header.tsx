import * as React from 'react';
import { StatelessComponent as Component } from 'react';
import { connect } from 'react-redux';
import WeatherIcon from '../component/Weather_icon';
import { IWeatherToProps } from '../Type';

const WeatherHeader: Component<IWeatherToProps> = ({
  weather: [
    {
      main: { temp },
      weather: [{ description, icon }]
    }
  ]
}) => {
  return (
    <header>
      <h1>서울</h1>
      <WeatherIcon icon={icon} />
      <h2>{(temp - 273.15).toFixed(1)}℃</h2>
      <h2>{description}</h2>
    </header>
  );
};

function mapStateToProps({ weather }: IWeatherToProps) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherHeader);
