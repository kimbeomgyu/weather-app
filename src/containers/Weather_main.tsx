import * as React from "react";
import { FC } from "react";
import { connect } from "react-redux";
import TableValue from "../component/Table";
import { IDataType, IWeatherToProps } from "../Type";

const WeatherMain: FC<IWeatherToProps> = ({
  air: [
    {
      ListAvgOfSeoulAirQualityService: {
        row: [{ PM10, PM25, OZONE, NITROGEN }],
      },
    },
  ],
}) => {
  const data = [
    { name1: "미세먼지", name2: "초미세먼지", value1: PM10, value2: PM25 },
    { name1: "오존", name2: "이산화질소", value1: OZONE, value2: NITROGEN },
  ];

  return (
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
  );
};

function mapStateToProps({ air }: IWeatherToProps) {
  return { air };
}

export default connect(mapStateToProps)(WeatherMain);
