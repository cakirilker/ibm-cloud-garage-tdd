class Stack {
  #capacity;
  #elements = [];
  constructor(capacity = 2) {
    if (capacity < 1)
      throw new Error('Invalid capacity');
    this.#capacity = capacity;
  }
  isEmpty = () => this.#elements.length === 0;
  size = () => this.#elements.length;
  push = (element) => {
    if (this.#elements.length === this.#capacity)
      throw new Error('Capacity overflow error');
    this.#elements.push(element);
  }
  pop = () => {
    if (this.#elements.length === 0)
      throw new Error('Capacity underflow error');
    return this.#elements.pop();
  }
}

module.exports = { Stack };
