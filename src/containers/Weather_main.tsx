import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import TableValue from '../component/Table';
import { IDataType, IWeatherToProps, IWMToState } from '../Type';

class WeatherMain extends Component<IWeatherToProps, IWMToState> {
  public state = {
    data: []
  };

  public componentDidMount() {
    const [{ ListAvgOfSeoulAirQualityService }] = this.props.air;
    const { row } = ListAvgOfSeoulAirQualityService;
    const [{ PM10, PM25, OZONE, NITROGEN }] = row;
    const data = [
      { name1: '미세먼지', name2: '초미세먼지', value1: PM10, value2: PM25 },
      { name1: '오존', name2: '이산화질소', value1: OZONE, value2: NITROGEN }
    ];
    this.setState({ data });
  }

  public render() {
    const { data } = this.state;

    return (
      data.length !== 0 && (
        <table>
          <thead>
            {data.map(({ name1, name2, value1, value2 }: IDataType) => (
              <tr key={name1 + name2}>
                <TableValue name={name1} value={value1} />
                <TableValue name={name2} value={value2} />
              </tr>
            ))}
          </thead>
        </table>
      )
    );
  }
}

function mapStateToProps({ air }: IWeatherToProps) {
  return { air };
}

export default connect(mapStateToProps)(WeatherMain);
