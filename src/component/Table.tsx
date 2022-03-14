import * as React from "react";
import { FC } from "react";
import good from "../assets/icon/icon-good.png";
import { ITableToProps } from "../Type";

const Table: FC<ITableToProps> = ({ name, value }) => (
  <td>
    <p>{name}</p>
    <div>
      <img src={good} />
      <h2>{value}</h2>
    </div>
  </td>
);

export default Table;
