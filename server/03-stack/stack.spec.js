const { Stack } = require('./stack')

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  })
  it('starts empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });
  it('starts with stack size of 0', () => {
    expect(stack.size()).toBe(0);
  });
  it('is not empty when pushed', () => {
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });
  it('stack size is 1 when pushed', () => {
    stack.push();
    expect(stack.size()).toBe(1);
  });
  it('stack is empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  it('stack size is 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });
  it('throws overflow error when pushing to a stack at full capacity', () => {
    stack.push();
    stack.push();
    expect(() => stack.push()).toThrowError('Capacity overflow error');
  });
  it('throw underflow error when popping an empty stack', () => {
    expect(() => stack.pop()).toThrowError('Capacity underflow error');
  });
  it('pops the same one item when pushed', () => {
    const item = 'A';
    stack.push(item);
    expect(stack.pop(item)).toEqual(item);
  });
  it('pops two items with the most recent first', () => {
    stack.push('A');
    stack.push('B');
    expect(stack.pop()).toEqual('B');
    expect(stack.pop()).toEqual('A');
  });
  it('accepts only a positive capacity', () => {
    expect(() => stack = new Stack(-1)).toThrowError('Invalid capacity');
  });
});