import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import WeatherIcon from '../component/Weather_icon';
import { IWeatherToProps, IWHToState } from '../Type';

class WeatherHeader extends Component<IWeatherToProps, IWHToState> {
  public state = {
    description: '',
    icon: '',
    temp: 0
  };

  public componentDidMount() {
    const [{ main, weather }] = this.props.weather;
    const { temp } = main;
    const [{ description, icon }] = weather;
    this.setState({ temp, description, icon });
  }

  public render() {
    const { temp, description, icon } = this.state;
    return (
      temp && (
        <header>
          <h1>서울</h1>
          <WeatherIcon icon={icon} />
          <h2>{(temp - 273.15).toFixed(1)}℃</h2>
          <h2>{description}</h2>
        </header>
      )
    );
  }
}

function mapStateToProps({ weather }: IWeatherToProps) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherHeader);
