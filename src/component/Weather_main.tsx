import * as React from 'react';
import { StatelessComponent } from 'react';
import AirTable from '../component/AirTable';
import { IAppToStates } from '../Type';

const WeatherMain: StatelessComponent<IAppToStates> = ({ time, data }) => {
  return (
    <section>
      <h5>{`오늘 ${time}요일`}</h5>
      <AirTable data={data} />
    </section>
  );
};

export default WeatherMain;
