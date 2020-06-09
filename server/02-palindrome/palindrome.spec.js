const { isPalindrome } = require('./palindrome');

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('the palindrome function should', () => {
  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true)
  });
  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false);
  });
  it('false for dad mom', () => {
    expect(isPalindrome('dad mom')).toBe(false);
  });
  it('false for whitespace', () => {
    expect(isPalindrome('      ')).toBe(false);
  });
  it('error for empty string', () => {
    expect(() => isPalindrome('')).toThrowError('empty strings are not palindrome');
  });
  it.todo('error for not a string');
})
