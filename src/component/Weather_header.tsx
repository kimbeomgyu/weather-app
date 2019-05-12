import * as React from 'react';
import { StatelessComponent } from 'react';
import mist from '../assets/icon/icon-mist.png';

const WeatherHeader: StatelessComponent = () => (
  <header>
    <h1>서울</h1>
    <img src={mist} />
    <h2>11.25℃</h2>
    <h2>안개</h2>
  </header>
);

export default WeatherHeader;
