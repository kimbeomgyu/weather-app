import * as moment from 'moment';
import * as React from 'react';
import { StatelessComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import AirTable from '../containers/Weather_main';

const WeatherSection: Component = () => {
  return (
    <section>
      <h4>
        {`오늘 ${getTime()}요일`}
        <Link to={'/test'} children="서울" />
      </h4>
      <AirTable />
    </section>
  );
};

// moment // 현재시간 불러오기
function getTime() {
  const weekdaysShort: any = {
    weekdaysShort: ['일', '월', '화', '수', '목', '금', '토']
  };
  moment.lang('ko', weekdaysShort);

  return moment().format('M월 DD일 ddd');
}
export default WeatherSection;
