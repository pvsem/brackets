module.exports = function check(str, bracketsConfig) {
    const joinedBracketsArr = bracketsConfig.map((item) => item.join(""));

    let newStr = str;
    let isChanged = true;

    while (isChanged) {
        const replaced = joinedBracketsArr.reduce(
            (acc, brackets) => acc.replace(brackets, ""),
            newStr
        );
        isChanged = replaced.length !== newStr.length;
        newStr = replaced;

        if (!newStr) return true;
    }

    return false;
};