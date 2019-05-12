import * as React from 'react';
import { StatelessComponent } from 'react';
import { IAppToStates, IDataType } from '../Type';
import TableValue from './TableValue';

const AirTable: StatelessComponent<IAppToStates> = ({ data }) => (
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

export default AirTable;
