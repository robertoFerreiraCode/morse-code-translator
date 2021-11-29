const translate = (oject, input) => {
    return input.map((char) => {
        if (oject.hasOwnProperty(char)) {
            return oject[char];
        }
        return "#";
    });
};

export default translate;
