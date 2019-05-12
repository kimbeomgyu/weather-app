import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, fetchWeather2 } from '../actions/index';
import logo from '../assets/logo.png';
import '../assets/scss/app.css';
import WeatherHeader from '../component/Weather_header';
import WeatherMain from '../component/Weather_main';
import { IAppToProps, IAppToStates } from '../Type';

class App extends React.Component<IAppToProps, IAppToStates> {
  public state = {
    data: [],
    time: '',
    weatherData: []
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
    await this.props.fetchWeather();
    await this.props.fetchWeather2();
    const {
      ListAvgOfSeoulAirQualityService: {
        row: [{ PM10, PM25, OZONE, NITROGEN }]
      }
    } = this.props.weather[0];
    const data = [
      { name1: '미세먼지', name2: '초미세먼지', value1: PM10, value2: PM25 },
      { name1: '오존', name2: '이산화질소', value1: OZONE, value2: NITROGEN }
    ];
    const weatherData = this.props.weather2;
    const time = this.getTime();
    this.setState({ data, time, weatherData });
  };

  public render() {
    const { time, data } = this.state;
    return (
      this.props.weather.length !== 0 && (
        <div className="App">
          <WeatherHeader />
          {JSON.stringify(this.state.weatherData)}
          <WeatherMain time={time} data={data} />
          <footer>
            <img src={logo} />
          </footer>
        </div>
      )
    );
  }
}

function mapStateToProps({
  weather,
  weather2
}: {
  weather: any;
  weather2: any;
}) {
  return { weather, weather2 };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchWeather, fetchWeather2 }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
