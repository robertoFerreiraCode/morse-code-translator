import translate from "./translate.js";
import { alphabet, reversedAlphabet } from "./dictionaries.js";

test('Should encode english letters to morse code correctly', () => {
    expect(translate(alphabet, ["a", "b", "c"])).toStrictEqual([".-", "-...", "-.-."]);
});

test('Should encode numbers to morse code correctly', () => {
    expect(translate(alphabet, ["8", "7", "3"])).toStrictEqual(["---..", "--...", "...--"]);
});

test('Should decode morse code to english letters correctly', () => {
    expect(translate(reversedAlphabet, [".-", "-...", "-.-."])).toStrictEqual(["a", "b", "c"]);
});

test('Should decode morse code to numbers correctly', () => {
    expect(translate(reversedAlphabet, ["---..", "--...", "...--"])).toStrictEqual(["8", "7", "3"]);
});