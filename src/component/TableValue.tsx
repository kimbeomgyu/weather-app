import * as React from 'react';
import good from '../assets/icon/icon-good.png';
import { ITableValueProps } from './Type';

const TableValue: React.StatelessComponent<ITableValueProps> = ({ name }) => (
  <td>
    <p>{name}</p>
    <div>
      <img src={good} />
      <h2>34</h2>
    </div>
  </td>
);

export default TableValue;
