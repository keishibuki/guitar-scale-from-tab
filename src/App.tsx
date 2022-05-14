import { useState, createContext, SetStateAction, Dispatch } from 'react'
import { Container, Stack, Heading } from "@chakra-ui/react"
import './App.css'
import FretFormControl from './components/FretFormControl';
import StringFormControl from './components/StringFormControl';
import Answer from './components/Answer';
import GuitarTable from './components/GuitarTable';

type Value = string;

const initialFret = '0';
export const FretContext = createContext<{ fret: Value, setFret: Dispatch<SetStateAction<Value>> }>({ fret: initialFret, setFret: () => '' });

const initialString = '1';
export const StringContext = createContext<{ string: Value, setString: Dispatch<SetStateAction<Value>> }>({ string: initialString, setString: () => '' })

function App() {
  const [fret, setFret] = useState<Value>(initialFret);
  const [string, setString] = useState<Value>(initialString);

  return (
    <FretContext.Provider value={{ fret, setFret }}>
      <StringContext.Provider value={{ string, setString }}>
        <div className="App">
          <Container pt={5} pb={5}>
            <Heading as="h1" size="md" mb={5}>
              ギターのタブ譜からドレミ変換
            </Heading>
            <Stack spacing={3}>
              <FretFormControl />
              <StringFormControl />
            </Stack>
            <Answer />
            <GuitarTable />
          </Container>
        </div>
      </StringContext.Provider>
    </FretContext.Provider>
  )
}

export default App
