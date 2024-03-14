function palindrome(x) {
    const str = x.toString();
    const reversedstr = str.split("").reverse().join("");
    return reversedstr===str;
}