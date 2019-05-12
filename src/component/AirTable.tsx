import * as React from 'react';
import TableValue from './TableValue';
import { IDataType, IProps } from './Type';

const AirTable: React.StatelessComponent<IProps> = ({ data }) => {
  return (
    <table>
      <thead>
        {data.map(({ name1, name2 }: IDataType) => (
          <tr key={name1 + name2}>
            <TableValue name={name1} />
            <TableValue name={name2} />
          </tr>
        ))}
      </thead>
    </table>
  );
};
export default AirTable;
