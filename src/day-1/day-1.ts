const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
export const part1Regex = /\d(?!\d)/g;
export const part2Regex = /\d(?!\d)|zero|one|two|three|four|five|six|seven|eight|nine/g;
export const day1 = (input: string[], regex) => {
  const sum: number = input.reduce((prev, curr) => {
    const matches = curr.match(regex);

    let first = matches[0];
    if (first in numbers) {
      first = numbers[first];
    }
    let second = matches[matches.length - 1];
    if (second in numbers) {
      second = numbers[second];
    }

    return prev + parseInt(`${first}${second}`);
  }, 0);

  return sum;
};
