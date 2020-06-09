const isPalindrome = (phrase) => {
    return phrase === phrase.split('').reverse().join('');
}
module.exports = { isPalindrome };
