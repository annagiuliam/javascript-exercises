const repeatString = function(word, num) {
    if (num < 0) return "ERROR"
    let longWord = ""
    let i = 0
    for (i = 0; i < num; i++) {
        longWord += word;
    }
    return longWord;
}

module.exports = repeatString
