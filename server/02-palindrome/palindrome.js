const isPalindrome = (word) => {
    return word === word.split('').reverse().join('');
}
module.exports = { isPalindrome };
