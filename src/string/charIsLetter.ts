const charIsLetter = (char) => {
    return new RegExp('[a-zA-Z]').test(char);
};

export default charIsLetter