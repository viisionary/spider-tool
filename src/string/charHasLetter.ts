const charHasLetter = (char) => {
    return new RegExp('[a-zA-Z]').test(char);
};

export default charHasLetter