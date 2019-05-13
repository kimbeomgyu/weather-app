import * as React from 'react';
import { StatelessComponent as Component } from 'react';
import cloud from '../assets/icon/icon-cloud.png';
import mist from '../assets/icon/icon-mist.png';
import rain from '../assets/icon/icon-rain.png';
import snow from '../assets/icon/icon-snow.png';
import sun from '../assets/icon/icon-sun.png';

const WeatherIcon: Component<{ icon: string }> = ({ icon }) => (
  <img src={Icon(icon.slice(0, 2))} />
);

function Icon(icon: string) {
  switch (icon) {
    case `01`:
      return sun;
    case `02`:
      return cloud;
    case `03`:
      return cloud;
    case `04`:
      return cloud;
    case `09`:
      return rain;
    case `10`:
      return rain;
    case `11`:
      return rain;
    case `13`:
      return snow;
    case `50`:
      return mist;
  }
  return sun;
}

export default WeatherIcon;
