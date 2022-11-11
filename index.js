import { alphabet, reversedAlphabet } from "./dictionaries.js";
import translate from "./translate.js";

const textInput = document.querySelector("#input");
const textOutput = document.querySelector("#output");
const modeButtons = document.querySelectorAll('input[name="mode"]');
let mode = "encode";

textInput.addEventListener("keyup", () => {
    mode === "encode"
        ? (textOutput.value = translate(
              alphabet,
              textInput.value.toLowerCase().split(""),
          ).join(" "))
        : (textOutput.value = translate(
              reversedAlphabet,
              textInput.value.toLowerCase().split(" "),
          ).join(""));
});

modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const instrEncode =
            "Type morse code here. Use a space between each letter and a / between each word.";
        const instrDecode =
            "Translated message here. / equates to a space, # equates to untranslatable character";

        const setText = (string, otherString) => {
            textInput.placeholder = string;
            textOutput.placeholder = otherString;
        };
        const oldMode = mode;
        mode = button.value;
        if (oldMode !== mode) {
            textInput.value = "";
            textOutput.value = "";

            mode === "decode"
                ? setText(instrEncode, "Type message here:")
                : setText("Translated Message: ", instrDecode);
        }
    });
});
