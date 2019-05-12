import * as React from 'react';
import TableValue from './TableValue';
import { IDataType } from './Type';

class AirTable extends React.Component<{ data: IDataType[] }> {
  public render() {
    return (
      <table>
        <thead>
          {this.props.data.map(
            ({ name1, name2, value1, value2 }: IDataType) => (
              <tr key={name1 + name2}>
                <TableValue name={name1} value={value1} />
                <TableValue name={name2} value={value2} />
              </tr>
            )
          )}
        </thead>
      </table>
    );
  }
}

export default AirTable;
