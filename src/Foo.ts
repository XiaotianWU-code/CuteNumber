export class Foo {
  bar() {
    return "bar";
  }
}

export function isCuteNumberGreaterThan10(numbers: number[]) {
  const eventNumber = findEvenNumbers(numbers);
  const maxNumber = findMaxNumber(eventNumber);
  return isNumberGreaterThan10(maxNumber);
}

export function findEvenNumbers(numbers: number[]) {
  return numbers.filter((tmp) => tmp % 2 === 0);
}

export function findMaxNumber(number: number[]) {
  return Math.max(...number);
}

function isNumberGreaterThan10(number: number) {
  return number > 10;
}
