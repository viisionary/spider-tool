function charIsChinese(char) {
    let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');

    return reg.test(char);
}

