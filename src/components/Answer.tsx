import { FC, useContext } from "react";
import { Text, Box } from "@chakra-ui/react";

import { FretContext, StringContext, TuningContext } from "../App";
import resource from '../resource';
import makeValues from "../resource";

const Answer: FC = () => {
  const { fret } = useContext(FretContext);
  const { string } = useContext(StringContext);
  const { tuning } = useContext(TuningContext);
  const data = makeValues(tuning);

  return (
    <Text mt={5} mb={5} fontSize="xl">
      {fret}フレットの{string}弦は
      <Box as="span" fontSize="4xl">
        「
        {fret && string && data[Number(fret)]
          ? data[Number(fret)][Number(string) - 1]
          : ""}
        」
      </Box>
      です。
  </Text>
  );
};

export default Answer;
