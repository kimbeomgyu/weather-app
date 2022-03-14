import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import airPollution from "../actions/air_pollution";
import cityWeather from "../actions/city_weather";
import WeatherFooter from "../component/Weather_footer";
import WeatherSection from "../component/Weather_section";
import { IWeatherToProps } from "../Type";
import WeatherHeader from "./Weather_header";

class Weather extends Component<IWeatherToProps> {
  public componentDidMount() {
    // fetch // 미세먼지,날씨 데이터 불러오기 및 스테이트 변경
    this.props.airPollution();
    this.props.cityWeather();
  }

  public render() {
    const { air, weather } = this.props;
    if (air.length && weather.length) {
      return (
        <div>
          <WeatherHeader />
          <WeatherSection />
          <WeatherFooter />
        </div>
      );
    } else {
      return <h1 children="loading..." />;
    }
  }
}

function mapStateToProps({ air, weather }: IWeatherToProps) {
  console.log(air, weather);
  return { air, weather };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ airPollution, cityWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
