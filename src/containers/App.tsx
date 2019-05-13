import * as moment from 'moment';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import airPollution from '../actions/air_pollution';
import cityWeather from '../actions/city_weather';
import logo from '../assets/logo.png';
import '../assets/scss/app.css';
import WeatherHeader from '../component/Weather_header';
import WeatherMain from '../component/Weather_main';
import { IAppToProps, IAppToStates } from '../Type';

class App extends Component<IAppToProps, IAppToStates> {
  public state = {
    data: [],
    description: '',
    icon: '',
    temp: 0,
    time: ''
  };

  public componentDidMount() {
    this.getData();
  }

  // moment // 현재시간 불러오기
  public getTime = () => {
    const weekdaysShort: any = {
      weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
    };
    moment.lang('ko', weekdaysShort);
    return moment().format('M월 DD일 ddd');
  };

  // fetch // 미세먼지 데이터 불러오기 및 스테이트 변경
  public getData = async () => {
    await this.props.airPollution();
    await this.props.cityWeather();
    const {
      ListAvgOfSeoulAirQualityService: {
        row: [{ PM10, PM25, OZONE, NITROGEN }]
      }
    } = this.props.air[0];
    const data = [
      { name1: '미세먼지', name2: '초미세먼지', value1: PM10, value2: PM25 },
      { name1: '오존', name2: '이산화질소', value1: OZONE, value2: NITROGEN }
    ];
    const {
      main: { temp },
      weather: [{ description, icon }]
    } = this.props.weather[0];
    const time = this.getTime();
    this.setState({ data, time, temp, description, icon });
  };

  public render() {
    const { time, data, temp, description, icon } = this.state;

    if (data.length === 0) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="App">
          <WeatherHeader temp={temp} description={description} icon={icon} />
          <WeatherMain time={time} data={data} />
          <footer>
            <img src={logo} />
          </footer>
        </div>
      );
    }
  }
}

function mapStateToProps({ air, weather }: { air: any; weather: any }) {
  return { air, weather };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ airPollution, cityWeather }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
