export {};

const add = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};

console.log("sum=", add(12, 34, 56));

const circle = ({ radius }: { radius: number }): number => {
  //named parameter
  return 3.14 * radius * radius;
};

console.log(circle({ radius: 8 }));

const multiply = (...numbers: number[]) => {
  return numbers.reduce((p, c) => p * c, 1);
};

console.log(multiply(1, 2, 3, 4, 5));

type EvenCheck = (num: number) => boolean;

const even: EvenCheck = (value) => value % 2 === 0;
console.log(even(50));
