const legibleByte: (size: number, i: number) => string = (size: any, i = 0) => {
    const text = ["KB", "MB", "GB", "TB"];
    if (isNaN(size)) {
        return "未知大小";
    }
    const smaller = parseInt(size) / 1024;
    if (smaller >= 1024) {
        i++;
        return legibleByte(smaller, i);
    }
    return Math.ceil(smaller) + text[i];
};

export default legibleByte