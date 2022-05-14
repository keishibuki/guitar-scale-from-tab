import { FC, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { FretContext } from "../App";

const FretFormControl: FC = () => {
  const { fret, setFret } = useContext(FretContext);

  return (
    <FormControl>
      <FormLabel htmlFor="inputFret" fontSize={14} fontWeight="bold">
        フレット番号
      </FormLabel>
      <Input
        id="inputFret"
        size="lg"
        type="number"
        name="fret"
        min={0}
        max={22}
        value={fret || undefined}
        onChange={(e) => {
          const value = Number(e?.target?.value);
          if (0 <= value && value < 23) {
            setFret(value.toString());
          }
        }}
      />
    </FormControl>
  );
};

export default FretFormControl;
