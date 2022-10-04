export const pitchName = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
export type Pitch = [string, number];

// +1フレット
export const plus1Fret = (strings: Pitch): Pitch => {
  const pitchNameIdx = pitchName.findIndex((pn) => pn === strings[0]);
  const isLast = pitchNameIdx === (pitchName.length - 1);
  return [pitchName[isLast ? 0 : pitchNameIdx + 1], isLast ? Number(strings[1]) + 1 : strings[1]];
}

// -1フレット
export const minus1Fret = (strings: Pitch): Pitch => {
  const pitchNameIdx = pitchName.findIndex((pn) => pn === strings[0]);
  const isFirst = pitchNameIdx === 0;
  return [pitchName[isFirst ? pitchName.length - 1 : pitchNameIdx - 1], isFirst ? Number(strings[1]) - 1 : strings[1]];
}

const makeValues = (tunings: Pitch[]): string[][] => {
  const values: (Pitch[])[] = [...new Array(25)].reduce((prev, _, idx) => {
    const last: Pitch[] = prev.length > 0 ? prev[prev.length - 1] : tunings;
    const strings = last.map((pitch) => {
      const value = plus1Fret(pitch);
      return value;
    });
    return idx > 0 ? [...prev, strings] : [tunings, ...prev, strings];
  }, []);
  
  return values.map((val) => {
    return val.reverse().map((v) => `${v[0]}${v[1]}`);
  });
};

export default makeValues;
