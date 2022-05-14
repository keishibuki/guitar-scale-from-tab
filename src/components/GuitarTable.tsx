import { FC, useContext } from "react";

import { FretContext, StringContext } from "../App";
import resource from '../resource';

const GuitarTable: FC = () => {
  const { fret } = useContext(FretContext);
  const { string } = useContext(StringContext);

  const style = {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#26a69a',
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>フレット番号</th>
            {resource[0].map((_, index) => {
              const stringNumber = 6 - index;
              return <th key={stringNumber} style={stringNumber === Number(string) ? style : undefined}>{stringNumber}弦</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {resource.map((strings, index) => {
            return (
              <tr key={`fret-${index}`}>
                <th style={index === Number(fret) ? style : undefined}>{index === 0 ? '開放弦' : index}</th>
                {[...strings].reverse().map((scale, idx) => {
                  const stringNumber = 6 - idx;
                  return (
                    <td key={`fret=${index}-string-${idx}`} style={index === Number(fret) && stringNumber === Number(string) ? style : undefined}>{scale}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GuitarTable;
