import { FC, useContext } from "react";

import { FretContext, StringContext, TuningContext } from "../App";
import makeValues from "../resource";
import resource from '../resource';
import TuningFormControl from "./TuningFormControl";

const GuitarTable: FC = () => {
  const { fret } = useContext(FretContext);
  const { string } = useContext(StringContext);
  const { tuning } = useContext(TuningContext);
  const data = makeValues(tuning);

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
            {tuning.map((_, index) => {
              const stringNumber = 6 - index;
              return (
                <th key={stringNumber} style={stringNumber === Number(string) ? style : undefined}>
                  <span>{stringNumber}弦</span>
                  <TuningFormControl stringIndex={index} />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((strings, index) => {
            return (
              <tr key={`fret-${index}`}>
                <th style={index === Number(fret) ? style : undefined}>{index === 0 ? '開放弦' : index}</th>
                {[...strings].map((scale, idx) => {
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
