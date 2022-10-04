import { FC, useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react"
import { initialTuning, TuningContext } from "../App";
import { minus1Fret, Pitch } from "../resource";

interface Props {
  stringIndex: number;
}

const TuningFormControl: FC<Props> = ({ stringIndex }) => {
  const [value, setValue] = useState('');
  const { tuning, setTuning } = useContext(TuningContext);

  return (
    <FormControl>
      <FormLabel htmlFor="inputTuning" fontSize={12}>
        チューニング
      </FormLabel>

      <Select value={value} onChange={(e) => {
        const pitch = initialTuning[stringIndex];
        const newValue = [...new Array(Number(e.currentTarget.value) / 0.5)].reduce((p: Pitch, c: Pitch): Pitch => {
          return minus1Fret(p);
        }, pitch);
        setTuning((prev) => {
          return prev.map((v, idx) => {
            return idx === stringIndex ? newValue : v;
          });;
        });
        setValue(e.currentTarget.value);
      }}>
        <option value=''>-</option>
        <option value='0.5'>半音下げ</option>
        <option value='1'>全音下げ</option>
        <option value='2'>2音下げ</option>
        <option value='3'>3音下げ</option>
      </Select>
    </FormControl>
  );
};

export default TuningFormControl;
