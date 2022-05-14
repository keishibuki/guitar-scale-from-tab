import { FC, useContext } from "react";
import { Text, Box } from "@chakra-ui/react";

import { FretContext, StringContext } from "../App";
import resource from '../resource';

const Answer: FC = () => {
  const { fret } = useContext(FretContext);
  const { string } = useContext(StringContext);

  return (
    <Text mt={5} mb={5} fontSize="xl">
      {fret}フレットの{string}弦は
      <Box as="span" fontSize="4xl">
        「
        {fret && string && resource[Number(fret)]
          ? resource[Number(fret)][Number(string) - 1]
          : ""}
        」
      </Box>
      です。
  </Text>
  );
};

export default Answer;
