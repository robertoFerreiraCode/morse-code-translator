const textInput = document.querySelector("#input");
const textOutput = document.querySelector("#output");
const modeButtons = document.querySelectorAll('input[name="mode"]');
let mode = "encode"; 

const alphabet = {
    'a': '.-',    'b': '-...',  
    'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  
    'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  
    'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    
    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   
    's': '...',  't': '-',
    'u': '..-',   'v': '...-',  
    'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  
    ' ': '/',     
    '1': '.----', '2': '..---', 
    '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', 
    '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----',
    '?': '..--..', '!': '-.-.--',
    '.': '.-.-.-', ',': '--..--',
    ';': '-.-.-.', ':': '---...',
    '+': '.-.-.', '-': '-....-',
    '/': '-..-.', '=': '-...-',
    '': '' 
};

const reversedAlphabet = Object.entries(alphabet).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, 
    {}
);

const translate = (alphabet, input) => {
    return input.map(char => {
        if (alphabet.hasOwnProperty(char)) {
            return alphabet[char];
        } else if(char === "/") {
            console.log("runs");
            return "   ";
        }
        else {
            return "#";
        }
    });
};

textInput.addEventListener("keyup", () => {
    const input = textInput.value;
    let output = "";
    if (mode === "encode") {
        let cleanedInput = input.toLowerCase().split("");
        output = translate(alphabet, cleanedInput).join(" ");
    } 
    else {
        let cleanedInput = input.split(" ");
        console.log(cleanedInput);
        output = translate(reversedAlphabet, cleanedInput).join("");
    }
    textOutput.value = output;
});

modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const oldMode = mode;
        mode = button.value;
        if (oldMode !== mode) {
            textInput.value = "";
            textOutput.value = "";
            if (mode === "decode") {
                textInput.placeholder = "Type morse code here. Use a space between each letter and a / between each word.";
                textOutput.placeholder = "Translated Message: ";
            } else if (mode === "encode") {
                textInput.placeholder = "Type message here:";
                textOutput.placeholder = "Translated message here. / equates to a space, # equates to untranslatable character";
            }
        }
    });
});
