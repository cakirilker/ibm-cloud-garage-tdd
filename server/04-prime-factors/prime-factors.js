const findPrimeFactors = (number) => {
  let factors = [];
  if (number > 1) {
    for (let divisor = 2; number > 1; divisor++) {
      for (; number % divisor === 0; number /= divisor) factors.push(divisor);
    }
  }
  return factors;
}

module.exports = { findPrimeFactors }