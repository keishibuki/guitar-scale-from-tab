import { useState, createContext, SetStateAction, Dispatch } from 'react'
import { Container, Grid, Heading } from "@chakra-ui/react"
import './App.css'
import FretFormControl from './components/FretFormControl';
import StringFormControl from './components/StringFormControl';
import Answer from './components/Answer';
import GuitarTable from './components/GuitarTable';
import { Pitch, pitchName } from './resource';

type Value = string;

const initialFret = '0';
export const FretContext = createContext<{ fret: Value, setFret: Dispatch<SetStateAction<Value>> }>({ fret: initialFret, setFret: () => '' });

const initialString = '1';
export const StringContext = createContext<{ string: Value, setString: Dispatch<SetStateAction<Value>> }>({ string: initialString, setString: () => '' })

export const initialTuning: Pitch[] = [
  [pitchName[4], 2],
  [pitchName[9], 2],
  [pitchName[2], 3],
  [pitchName[7], 3],
  [pitchName[11], 3],
  [pitchName[4], 4],
];
export const TuningContext = createContext<{ tuning: Pitch[], setTuning: Dispatch<SetStateAction<Pitch[]>> }>({ tuning: initialTuning, setTuning: () => '' })

function App() {
  const [fret, setFret] = useState<Value>(initialFret);
  const [string, setString] = useState<Value>(initialString);
  const [tuning, setTuning] = useState<Pitch[]>(initialTuning);

  return (
    <FretContext.Provider value={{ fret, setFret }}>
      <StringContext.Provider value={{ string, setString }}>
        <TuningContext.Provider value={{ tuning, setTuning }}>
          <div className="App">
            <Container maxW='5xl' pt={5} pb={5}>
              <Heading as="h1" size="md" mb={5}>
                ギターのタブ譜からドレミ変換
              </Heading>
              <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                <FretFormControl />
                <StringFormControl />
              </Grid>
              <Answer />
              <GuitarTable />
            </Container>
          </div>
        </TuningContext.Provider>
      </StringContext.Provider>
    </FretContext.Provider>
  )
}

export default App
