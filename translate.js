const translate = (alphabet, input) => {
    return input.map((char) => {
        if (alphabet.hasOwnProperty(char)) {
            return alphabet[char];
        }
        return "#";
    });
};

export default translate;
