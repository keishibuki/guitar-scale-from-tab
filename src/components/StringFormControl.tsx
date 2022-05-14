import { FC, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { StringContext } from "../App";

const StringFormControl: FC = () => {
  const { string, setString } = useContext(StringContext);

  return (
    <FormControl>
      <FormLabel htmlFor="inputString" fontSize={14} fontWeight="bold">
        弦番号
      </FormLabel>
      <Input
        id="inputString"
        size="lg"
        type="number"
        name="string"
        min={1}
        max={6}
        value={string || undefined}
        onChange={(e) => {
          const value = Number(e?.target?.value);
          if (0 < value && value < 7) {
            setString(value.toString());
          }
        }}
      />
    </FormControl>
  );
};

export default StringFormControl;
