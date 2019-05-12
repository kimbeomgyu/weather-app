import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import logo from '../assets/logo.png';
import '../assets/scss/app.css';
import AirTable from '../component/AirTable';
import { IDataType } from '../component/Type';
import WeatherHeader from './Weather_header';

class App extends React.Component<{ weather: any; fetchWeather: any }> {
  public state: { data: IDataType[]; time: any } = {
    data: [],
    time: ''
  };

  public componentDidMount() {
    const data = this.getData();
    const time = this.getTime();
    this.setState({ data, time });
  }

  // moment //현재시간불러오기
  public getTime = () => {
    const weekdaysShort: any = {
      weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
    };
    moment.lang('ko', weekdaysShort);
    return moment().format('M월 DD일 ddd');
  };

  // fetch // 미세먼지 데이터 불러오기
  public getData = async () => {
    await this.props.fetchWeather();
    const {
      ListAvgOfSeoulAirQualityService: {
        row: [{ PM10, PM25, OZONE, NITROGEN }]
      }
    } = this.props.weather[0];
    return [
      { name1: '미세먼지', name2: '초미세먼지', value1: PM10, value2: PM25 },
      { name1: '오존', name2: '이산화질소', value1: OZONE, value2: NITROGEN }
    ];
  };

  public render() {
    return (
      this.props.weather.length !== 0 && (
        <div className="App">
          <WeatherHeader />
          <section>
            <h5>{`오늘 ${this.state.time}요일`}</h5>
            <AirTable data={this.state.data} />
          </section>
          <footer>
            <img src={logo} />
          </footer>
        </div>
      )
    );
  }
}

function mapStateToProps({ weather }: { weather: any }) {
  return { weather };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
