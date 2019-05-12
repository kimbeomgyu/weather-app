import * as React from 'react';
import AirTable from './AirTable';

import mist from '../assets/icon/icon-mist.png';
import logo from '../assets/logo.png';
import '../assets/scss/app.css';
import { IDataType } from './Type';

class App extends React.Component {
  public state: { data: IDataType[] } = {
    data: [
      { name1: '미세먼지', name2: '초미세먼지' },
      { name1: '오존', name2: '이산화질소' }
    ]
  };
  public render() {
    return (
      <div className="App">
        <header>
          <h1>서울</h1>
          <img src={mist} />
          <h2>11.25℃</h2>
          <h2>안개</h2>
        </header>
        <section>
          <h5>오늘 4월 2일 화요일</h5>
          <AirTable data={this.state.data} />
        </section>
        <footer>
          <img src={logo} />
        </footer>
      </div>
    );
  }
}

export default App;
