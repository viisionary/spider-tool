const legibleByte: (size: number, i: number) => string = (size: number, i = 0) => {
    const text = ["KB", "MB", "GB"];
    const smaller = size / 1024;
    if (smaller >= 1024) {
        i++;
        return legibleByte(smaller, i);
    }
    return Math.floor(smaller) + text[i];
};

export default legibleByte