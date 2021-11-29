
const FizzWords = new Map<number, string>([
  [3, "Fizz"],
  [5, "Buzz"],
  [7, "Bazz"],
])

const IsDivisibleBy = (divider: number, dividend: number): boolean =>
  dividend % divider === 0

const FizzBuzz = (n: number): string => {
  let output: string = "";

  FizzWords.forEach((value, key) => {
    if (IsDivisibleBy(key, n))
      output += value;
  })
  return output;
}

for (let i = 0; i < 20; i++)
  console.log(`${i}: ${FizzBuzz(i)}`);

