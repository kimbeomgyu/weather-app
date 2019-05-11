import * as React from 'react';
import '../assets/css/app.css';
import good from '../assets/icon/icon-good.png';
import mist from '../assets/icon/icon-mist.png';
import logo from '../assets/logo.png';

class App extends React.Component {
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
          <div>
            <tr>
              <th>
                <p>미세먼지</p>
                <div>
                  <img src={good} />
                  <h2>34</h2>
                </div>
              </th>
              <th>
                <p>초미세먼지</p>
                <div>
                  <img src={good} />
                  <h2>18</h2>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <p>오존</p>
                <div>
                  <img src={good} />
                  <h2>0.051</h2>
                </div>
              </th>
              <th>
                <p>이산화질소</p>
                <div>
                  <img src={good} />
                  <h2>0.011</h2>
                </div>
              </th>
            </tr>
          </div>
        </section>
        <footer>
          <img src={logo} />
        </footer>
      </div>
    );
  }
}

export default App;
